import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";

export const RecommendPage: React.FC = () => {
  const navigate = useNavigate();
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
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
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
            onClick={() => navigate(path)}
            title={title}
            className="bg-secondary border-darkyellow text-[29px] mt-11 py-[11px]"
          />
        ))}
      </nav>
    </>
  );
};
