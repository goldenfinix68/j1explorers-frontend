import React from "react";
import { Link, useNavigate, useMatch, useParams } from "react-router-dom";
import NavButtonComponent from "../../components/nav.button";
import HeaderComponent from "../../components/header";
import { CITIES, COLORS, CONTACTS } from "../../consts";
import { isValidCity } from "../../utils/validator";

interface CityContactParams extends Record<string, string> {
  city: string;
}

export const CityContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { city } = useParams<CityContactParams>();
  console.log(city, CITIES);
  const contactURL = ["hotel", "fly-away", "hop-on-off", "coordinator"];

  if (!isValidCity(city)) {
    return <div>Invalid city</div>;
  }

  return (
    <>
      <HeaderComponent>
        <Link to="/contact">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>{CITIES[city]}</span>
          <span>Contacts/Links</span>
        </div>
      </HeaderComponent>
      <div className="mx-3 text-[29.16px] mt-[18px] font-light">
        {contactURL.map((contact) => (
          <NavButtonComponent
            title={`${CITIES[city]} ${CONTACTS[contact]}`}
            className={`text-[23.71px] ${COLORS[city]} mt-[45px]`}
            onClick={() => navigate(contact)}
          />
        ))}
      </div>
    </>
  );
};
