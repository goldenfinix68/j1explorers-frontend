import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../../components/header";
import DividerComponent from "../../components/divider";
import { CONTENT_COLORS, TITLE_COLORS } from "../../consts";
import { schedules } from "../../consts/api_data";
import { ScheduleDetailParams, ScheduleTitle, Location } from "../../type";
import {
  isValidDayScheduleIndex,
  isValidScheduleIndex,
} from "../../utils/validator";
import {
  getFirstOfPair,
  getSecondOfPair,
  isPair,
  processPairString,
} from "../../utils/common";

export const ScheduleDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { day_index, schedule_index } = useParams<ScheduleDetailParams>();

  if (
    !isValidDayScheduleIndex(day_index) ||
    !isValidScheduleIndex(day_index, schedule_index)
  ) {
    return <div>Invalid Index</div>;
  }

  const daySchedule = schedules[Number(day_index)];
  const scheduleDetail = daySchedule.details[Number(schedule_index)];

  return (
    <>
      <HeaderComponent>
        <Link to={`/schedule/${day_index}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/left_yellow.png`}
          />
        </Link>
        <div className="text-[24.08px] font-bold text-center leading-none">
          <div className={TITLE_COLORS[daySchedule.location]}>
            {getSecondOfPair<string>(daySchedule.title)}
          </div>
          {scheduleDetail.time && (
            <div
              className={
                TITLE_COLORS[getSecondOfPair<Location>(scheduleDetail.location)]
              }
            >
              {processPairString(scheduleDetail.time)}
            </div>
          )}
        </div>
      </HeaderComponent>
      <DividerComponent className="border-darkyellow mx-3" />
      <div className="mx-3 mt-[18px] text-center">
        <div className="text-[29.375px] font-bold">
          {isPair<ScheduleTitle>(
            getSecondOfPair<ScheduleTitle>(scheduleDetail.title)
          ) ? (
            <React.Fragment>
              <span
                className={
                  TITLE_COLORS[
                    getFirstOfPair<Location>(scheduleDetail.location)
                  ]
                }
              >
                {getFirstOfPair<string>(
                  getSecondOfPair<ScheduleTitle>(scheduleDetail.title)
                )}
                &nbsp;
              </span>
              <span
                className={
                  TITLE_COLORS[
                    getSecondOfPair<Location>(scheduleDetail.location)
                  ]
                }
              >
                {getSecondOfPair<string>(
                  getSecondOfPair<ScheduleTitle>(scheduleDetail.title)
                )}
              </span>
            </React.Fragment>
          ) : (
            <span
              className={
                TITLE_COLORS[getSecondOfPair<Location>(scheduleDetail.location)]
              }
            >
              {getFirstOfPair<string>(
                getSecondOfPair<ScheduleTitle>(scheduleDetail.title)
              )}
            </span>
          )}
        </div>
        <div
          className={`text-[14.08px] ${
            CONTENT_COLORS[getSecondOfPair(scheduleDetail.location)]
          } leading-none mx-6 italic`}
        >
          {scheduleDetail.content}
        </div>
        {scheduleDetail.image && (
          <img
            src={`${process.env.PUBLIC_URL}/${scheduleDetail.image}`}
            className="border-[3px] border-primary p-8 mt-16 mx-auto"
          />
        )}
      </div>
    </>
  );
};
