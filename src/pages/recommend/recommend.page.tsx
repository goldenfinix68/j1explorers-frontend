import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { Direction } from "../../type";

export const RecommendPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  const apps = [
    { path: "big-bus", title: "Big Bus" },
    { path: "google-map", title: "Google Maps" },
    { path: "app-in-the-air", title: "App in the Air" },
    { path: "whatsapp", title: "WhatsApp" },
    { path: "uber", title: "Uber" },
  ];

  return (
    <>
      <HeaderComponent>
        <Link to="/" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>Recommended</span>
          <span>Apps</span>
        </div>
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        {apps.map(({ title, path }) => (
          <NavButtonComponent
            key={title}
            onClick={() => handleNavigation(path)}
            title={title}
            className="bg-secondary border-darkyellow text-[29px] mt-11 py-[11px]"
          />
        ))}
      </nav>
    </>
  );
};
