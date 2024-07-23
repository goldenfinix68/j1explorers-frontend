import React from "react";
import HeaderComponent from "../../components/header";
import { Link, useNavigate, useParams } from "react-router-dom";
import ComplexButtonComponent from "../../components/complex.button";
import NavButtonComponent from "../../components/nav.button";
import {
  DayScheduleParams,
  Direction,
  Location,
  ScheduleTitle,
} from "../../type";
import { isValidDayScheduleIndex } from "../../utils/validator";
import { schedules } from "../../consts/schedules_data";
import { BUTTON_COLORS, TITLE_COLORS, cities } from "../../consts";
import {
  getArrayFromPair,
  getFirstOfPair,
  getSecondOfPair,
  processPairString,
} from "../../utils/common";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { useFetchTourWithSchedulesQuery } from "../../service/tourService";
export const DaySchedulePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { day_index } = useParams<DayScheduleParams>();
  const { data } = useFetchTourWithSchedulesQuery(day_index || "1");

  if (!isValidDayScheduleIndex(day_index)) {
    return <div>Invalid Index</div>;
  }

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  return (
    <>
      <HeaderComponent>
        <Link to="/schedule" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_yellow.png" />
        </Link>
        <div className="text-[24.08px] font-bold text-center leading-none">
          <div className="flex items-center">
            <span className="text-primary">LA</span>
            <img src="/assets/images/arrow_green.png" className="w-fit h-fit" />
            <span className="text-darkyellow">Vegas</span>
            <img src="/assets/images/arrow_yellow.pn" className="w-fit h-fit" />
            <span className="text-secondary">NYC</span>
          </div>
          <div className={TITLE_COLORS[schedules[Number(day_index)].location]}>
            {getSecondOfPair<string>(schedules[Number(day_index)].title)}
          </div>
        </div>
      </HeaderComponent>
      <div className="mx-3">
        {data?.map(({ time, from, to, title, id }, index) =>
          time ? (
            <ComplexButtonComponent
              left_title={[...time.split(/(?=[-(])/)]}
              left_className={BUTTON_COLORS[cities[from]]}
              right_title={title}
              right_className={
                BUTTON_COLORS[getSecondOfPair<Location>(cities[to])]
              }
              onClick={() => handleNavigation(id.toString())}
            />
          ) : (
            <NavButtonComponent
              title={processPairString(getFirstOfPair<ScheduleTitle>(title))}
              className={`${
                BUTTON_COLORS[cities[from]]
              } text-[18.25px] font-light mb-1 py-[11px]`}
              onClick={() => handleNavigation(id.toString())}
            />
          )
        )}
      </div>
    </>
  );
};
