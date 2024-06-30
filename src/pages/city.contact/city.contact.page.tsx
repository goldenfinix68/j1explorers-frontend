import React from "react";
import { Link, useParams } from "react-router-dom";
import { CityContactParams, CityParams } from "../../type";
import { isValidCity, isValidContact } from "../../utils/validator";
import HeaderComponent from "../../components/header";
import {
  BUTTON_COLORS,
  CITIES,
  CONTACT_TYPES,
  CONTENT_COLORS,
  DIVIDER_COLORS,
  TITLE_COLORS,
} from "../../consts";
import DividerComponent from "../../components/divider";
import NavButtonComponent from "../../components/nav.button";
import ContactDetailComponent from "../../components/contact.detail";

export const CityContactPage: React.FC = () => {
  const { city, contact_type } = useParams<CityContactParams>();

  if (!isValidCity(city) || !isValidContact(contact_type)) {
    return <div>Invalid City</div>;
  }

  return (
    <>
      <HeaderComponent>
        <Link to={`/contact/${city}`}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div
          className={`flex flex-col ${TITLE_COLORS[city]} text-[29px] text-center font-bold leading-[24.16px]`}
        >
          <span>
            {contact_type === "grand-canyon-hoover-dam"
              ? CONTACT_TYPES[contact_type]
              : `${CITIES[city]} ${CONTACT_TYPES[contact_type]}`}
          </span>
        </div>
      </HeaderComponent>
      <div className="mx-3 font-bold leading-none text-center">
        <DividerComponent className={DIVIDER_COLORS[city]} />
        <ContactDetailComponent
          title="Hotel name"
          titleClassName={TITLE_COLORS[city]}
          content={["Big Suite Hotel"]}
          contentClassName={CONTENT_COLORS[city]}
        />
        <DividerComponent className={DIVIDER_COLORS[city]} />
        <ContactDetailComponent
          title="Physical address"
          titleClassName={TITLE_COLORS[city]}
          content={["30 N Gould St", "Suite R", "Sheridan, WY 82801"]}
          contentClassName={CONTENT_COLORS[city]}
        />
        <NavButtonComponent
          title="Get directions"
          className={`${BUTTON_COLORS[city]} text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
        <DividerComponent className={DIVIDER_COLORS[city]} />
        <ContactDetailComponent
          title="Phone number"
          titleClassName={TITLE_COLORS[city]}
          content={["+1 307-757-6430"]}
          contentClassName={CONTENT_COLORS[city]}
        />
        <NavButtonComponent
          title="Call now"
          className={`${BUTTON_COLORS[city]} text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
        <DividerComponent className={DIVIDER_COLORS[city]} />
        <ContactDetailComponent
          title="Website"
          titleClassName={TITLE_COLORS[city]}
          content={["j1explorers.com"]}
          contentClassName={CONTENT_COLORS[city]}
        />
        <NavButtonComponent
          title="Go to website"
          className={`${BUTTON_COLORS[city]} text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
      </div>
    </>
  );
};
