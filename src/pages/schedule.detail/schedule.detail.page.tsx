import React from "react";
import { Link, useParams } from "react-router-dom";
import HeaderComponent from "../../components/header";
import DividerComponent from "../../components/divider";
import { CONTENT_COLORS, TITLE_COLORS, cities } from "../../consts";
import { schedules } from "../../consts/schedules_data";
import { ScheduleDetailParams, Direction } from "../../type";
import { isValidDayScheduleIndex } from "../../utils/validator";
import { getSecondOfPair } from "../../utils/common";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { useFetchScheduleQuery } from "../../service/scheduleService";

export const ScheduleDetailPage: React.FC = () => {
  const dispatch = useDispatch();

  const { day_index, schedule_index } = useParams<ScheduleDetailParams>();
  const {
    data: schedule,
    isLoading,
    error,
  } = useFetchScheduleQuery(schedule_index || "1");

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  if (!isValidDayScheduleIndex(day_index)) {
    return <div>Invalid Index</div>;
  }

  if (!schedule) {
    return <div>Invalid Page</div>;
  }

  const daySchedule = schedules[Number(day_index)];

  return (
    <>
      <HeaderComponent>
        <Link to={`/schedule/${day_index}`} onClick={() => handleDirection(-1)}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/left_yellow.png`}
          />
        </Link>
        <div className="text-[24.08px] font-bold text-center leading-none">
          <div className={TITLE_COLORS[daySchedule.location]}>
            {getSecondOfPair<string>(daySchedule.title)}
          </div>
          {schedule?.time && (
            <div className={TITLE_COLORS[cities[schedule?.to]]}>
              {schedule?.time}
            </div>
          )}
        </div>
      </HeaderComponent>
      <DividerComponent className="border-darkyellow mx-3" />
      <div className="mx-3 mt-[18px] text-center">
        <div className="text-[29.375px] font-bold">
          <span className={TITLE_COLORS[cities[schedule?.to]]}>
            {schedule?.title}
          </span>
        </div>
        <div
          className={`text-[14.08px] ${
            CONTENT_COLORS[cities[schedule?.to]]
          } leading-none mx-6 italic`}
        >
          {schedule?.content}
        </div>
        {schedule?.image && (
          <img
            src={`${process.env.PUBLIC_URL}/${schedule?.image}`}
            className="border-[3px] border-primary p-8 mt-16 mx-auto"
          />
        )}
      </div>
    </>
  );
};
