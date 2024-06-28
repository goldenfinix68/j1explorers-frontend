import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavButtonComponent from "../../components/nav.button";
import HeaderComponent from "../../components/header";

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  const contactArray = [
    {
      title: "LA Contacts/Links",
      backgroundColor: "bg-primary",
      borderColor: "border-darkgreen",
      path: "/contact/la",
    },
    {
      title: "Vegas Contacts/Links",
      backgroundColor: "bg-darkyellow",
      borderColor: "border-secondary",
      path: "/contact/vegas",
    },
    {
      title: "NYC Contacts/Links",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
      path: "/contact/nyc",
    },
  ];
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
        {contactArray.map(({ title, backgroundColor, borderColor, path }) => (
          <NavButtonComponent
            title={title}
            className={`${backgroundColor} ${borderColor} text-[23.71px]`}
            onClick={() => navigate(path)}
          />
        ))}
      </div>
    </>
  );
};
