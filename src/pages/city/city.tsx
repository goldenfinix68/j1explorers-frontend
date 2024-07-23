import React from "react";
import { Link, useNavigate, useMatch, useParams } from "react-router-dom";
import NavButtonComponent from "../../components/nav.button";
import HeaderComponent from "../../components/header";
import {
  CITIES,
  BUTTON_COLORS,
  CITY_CONTACTS,
  CONTACT_TYPES,
} from "../../consts";
import { isValidCity } from "../../utils/validator";
import { CityParams, Direction } from "../../type";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";

export const CityPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { city } = useParams<CityParams>();

  if (!isValidCity(city)) {
    return <div>Invalid city</div>;
  }

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  const contactURL = CITY_CONTACTS[city];

  return (
    <>
      <HeaderComponent>
        <Link to="/contact" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>{CITIES[city]}</span>
          <span>Contacts/Links</span>
        </div>
      </HeaderComponent>
      <div className="mx-3 text-[29.16px] mt-[18px] font-light">
        {contactURL.map((contact) => (
          <NavButtonComponent
            title={
              contact === "grand-canyon-hoover-dam"
                ? CONTACT_TYPES[contact]
                : `${CITIES[city]} ${CONTACT_TYPES[contact]}`
            }
            className={`text-[23.71px] ${BUTTON_COLORS[city]} mt-[45px] mb-1 py-[11px]`}
            onClick={() => handleNavigation(contact)}
          />
        ))}
      </div>
    </>
  );
};
