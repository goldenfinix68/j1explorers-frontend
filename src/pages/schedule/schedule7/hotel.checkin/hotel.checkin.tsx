import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderComponent from "../../../../components/header";
import DividerComponent from "../../../../components/divider";

export const HotelCheckInPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderComponent>
        <Link to="/schedule/7">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/left_yellow.png`}
          />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>September 7</span>
        </div>
      </HeaderComponent>
      <DividerComponent className="border-darkyellow mx-3" />
      <div className="mx-3 mt-[18px] text-center">
        <div className="text-[29.375px] text-secondary font-bold">
          Hotel check-in
        </div>
        <div className="text-[14.08px] text-darkyellow leading-none font-semibold mx-6 italic">
          You should check with the front desk the night before to arrange a
          shuttle time based on your flight departure time. You should allow at
          least 30 minutes shuttle time and should be at the airport a minimum
          of 2 hours prior to the flight departure time.
        </div>
      </div>
    </>
  );
};
