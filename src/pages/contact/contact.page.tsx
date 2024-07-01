import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavButtonComponent from "../../components/nav.button";
import HeaderComponent from "../../components/header";
import { CITIES, BUTTON_COLORS } from "../../consts";
import { Location } from "../../type";

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const cities: Location[] = ["la", "vegas", "nyc"];

  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>Contacts/</span>
          <span>Links</span>
        </div>
      </HeaderComponent>
      <div className="mx-3 text-[11.67px] mt-[18px] font-light">
        {cities.map((city) => (
          <NavButtonComponent
            title={`${CITIES[city]} Contacts/Links`}
            className={`${BUTTON_COLORS[city]} text-[23.71px] mt-10 mb-1 py-[11px]`}
            onClick={() => navigate(city)}
          />
        ))}
      </div>
    </>
  );
};
