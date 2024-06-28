import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavButtonComponent from "../../components/nav.button";
import HeaderComponent from "../../components/header";

export const SchedulePage: React.FC = () => {
  const navigate = useNavigate();

  const scheduleArray = [
    {
      title: "Optional Additional Day",
      backgroundColor: "bg-primary",
      borderColor: "border-darkgreen",
      path: "/schedule/3",
    },
    {
      title: "September 3rd",
      backgroundColor: "bg-primary",
      borderColor: "border-darkgreen",
      path: "/schedule/3",
    },
    {
      title: "September 4th",
      backgroundColor: "bg-primary",
      borderColor: "border-darkgreen",
      path: "/schedule/3",
    },
    {
      title: "September 5th",
      backgroundColor: "bg-darkyellow",
      borderColor: "border-secondary",
      path: "/schedule/3",
    },
    {
      title: "September 6th",
      backgroundColor: "bg-darkyellow",
      borderColor: "border-secondary",
      path: "/schedule/3",
    },
    {
      title: "September 7th",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
      path: "/schedule/7",
    },
    {
      title: "September 8th",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
      path: "/schedule/3",
    },
    {
      title: "September 9th",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
      path: "/schedule/3",
    },
    {
      title: "Optional Additional Day",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
      path: "/schedule/3",
    },
  ];
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
        {scheduleArray.map(({ title, backgroundColor, borderColor, path }) => (
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
