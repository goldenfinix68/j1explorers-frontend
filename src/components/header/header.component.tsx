import React from "react";
import { User } from "../../store/user/user.type";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import "./header.component.css";
import { Tour } from "../../store/tour/tour.type";
import { tourSelector } from "../../store/tour/tour.selector";
import { formatDate } from "../../utils/processDate";

export const HeaderComponent: React.FC = () => {
  const { firstName, lastName }: User = useSelector(userSelector);
  const { period, route }: Tour = useSelector(tourSelector);
  return (
    <div className="mt-5 mb-2">
      <div className="flex justify-between items-center mb-2">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          className="logo"
        />
        <div
          className="text-primary text-[17.58px] mr-[30px]"
          style={{ lineHeight: "1.2" }}
        >
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
      </div>
      <div className="flex justify-center text-[10.56px] font-bold">
        <div className="text-primary">
          start In&nbsp;
          {route.from}
          &nbsp;
          {formatDate(period.from)}
        </div>
        <div className="text-darkyellow">&nbsp;|&nbsp;</div>
        <div className="text-secondary">
          start In&nbsp;
          {route.to}
          &nbsp;
          {formatDate(period.to)}
        </div>
      </div>
    </div>
  );
};
