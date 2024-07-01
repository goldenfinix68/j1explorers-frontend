import React from "react";
import HeaderComponent from "../../components/header";
import { Link, useNavigate, useParams } from "react-router-dom";
import ComplexButtonComponent from "../../components/complex.button";
import NavButtonComponent from "../../components/nav.button";
import { DayScheduleParams, Location, ScheduleTitle } from "../../type";
import { isValidDayScheduleIndex } from "../../utils/validator";
import { schedules } from "../../consts/api_data";
import { BUTTON_COLORS, TITLE_COLORS } from "../../consts";
import {
  getArrayFromPair,
  getFirstOfPair,
  getSecondOfPair,
  processPairString,
} from "../../utils/common";
export const DaySchedulePage: React.FC = () => {
  const navigate = useNavigate();
  const { day_index } = useParams<DayScheduleParams>();

  if (!isValidDayScheduleIndex(day_index)) {
    return <div>Invalid Index</div>;
  }

  return (
    <>
      <HeaderComponent>
        <Link to="/schedule">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/left_yellow.png`}
          />
        </Link>
        <div className="text-[24.08px] font-bold text-center leading-none">
          <div className="flex items-center">
            <span className="text-primary">LA</span>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/arrow_green.png`}
              className="w-fit h-fit"
            />
            <span className="text-darkyellow">Vegas</span>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/arrow_yellow.png`}
              className="w-fit h-fit"
            />
            <span className="text-secondary">NYC</span>
          </div>
          <div className={TITLE_COLORS[schedules[Number(day_index)].location]}>
            {getSecondOfPair<string>(schedules[Number(day_index)].title)}
          </div>
        </div>
      </HeaderComponent>
      <div className="mx-3">
        {schedules[Number(day_index)].details.map(
          ({ time, location, title }, index) =>
            time ? (
              <ComplexButtonComponent
                left_title={getArrayFromPair(time)}
                left_className={
                  BUTTON_COLORS[getFirstOfPair<Location>(location)]
                }
                right_title={processPairString(
                  getFirstOfPair<ScheduleTitle>(title)
                )}
                right_className={
                  BUTTON_COLORS[getSecondOfPair<Location>(location)]
                }
                onClick={() => navigate(index.toString())}
              />
            ) : (
              <NavButtonComponent
                title={processPairString(getFirstOfPair<ScheduleTitle>(title))}
                className={`${
                  BUTTON_COLORS[getFirstOfPair<Location>(location)]
                } text-[18.25px] font-light mb-1 py-[11px]`}
                onClick={() => navigate(index.toString())}
              />
            )
        )}
      </div>
    </>
  );
};
