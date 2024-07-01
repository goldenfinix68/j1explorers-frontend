import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavButtonComponent from "../../components/nav.button";
import HeaderComponent from "../../components/header";
import { schedules } from "../../consts/api_data";
import { isPair } from "../../utils/common";
import { BUTTON_COLORS } from "../../consts";

export const SchedulePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>Schedule/</span>
          <span>Reservations</span>
        </div>
      </HeaderComponent>
      <div className="mx-3 text-[11.67px] mt-[18px] font-light">
        {schedules.map(({ title, location }, index) => (
          <NavButtonComponent
            title={isPair<string>(title) ? title.first : title}
            className={`${BUTTON_COLORS[location]} text-[23.71px] mb-1 py-[11px]`}
            onClick={() => navigate(index.toString())}
          />
        ))}
      </div>
    </>
  );
};
