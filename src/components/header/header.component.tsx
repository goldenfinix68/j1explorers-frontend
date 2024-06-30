import React from "react";
import { User } from "../../store/user/user.type";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import "./header.component.css";
import { Tour } from "../../store/tour/tour.type";
import { tourSelector } from "../../store/tour/tour.selector";
import { formatDate } from "../../utils/processDate";
import { isVisible } from "@testing-library/user-event/dist/utils";
interface HeaderComponentProps {
  children: React.ReactNode;
  isVisible?: boolean;
}
export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  children,
  isVisible = true,
}) => {
  const { firstName, lastName }: User = useSelector(userSelector);
  const { period, route }: Tour = useSelector(tourSelector);
  return (
    <div className="mt-5 mb-2 mx-3">
      <div className="flex justify-between items-center mb-2">
        {children}
        <div className="text-primary text-[24.16px] font-light leading-none">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
      </div>
      {isVisible ? (
        <div className="flex justify-center text-[14.58px] font-bold">
          <div className="text-primary">
            start In&nbsp;
            {route.from}
            &nbsp;
            {formatDate(period.from)}
          </div>
          <div className="text-darkyellow">&nbsp;|&nbsp;</div>
          <div className="text-secondary">
            end In&nbsp;
            {route.to}
            &nbsp;
            {formatDate(period.to)}
          </div>
        </div>
      ) : (
        <div className="h-4"></div>
      )}
    </div>
  );
};
