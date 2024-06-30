import React from "react";
import { useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const menu = [
    { path: "/tour-detail", title: "Your Tour Details" },
    { path: "/profile", title: "Profile/Pack Members" },
    { path: "/schedule", title: "Schedule/Reservations" },
    { path: "/recommend", title: "Recommended Apps" },
    { path: "/contact", title: "Contact/Links" },
    { path: "/faq", title: "FAQs" },
    { path: "/terms", title: "Terms & Conditions" },
    { path: "/j1e", title: "J1E Website/Flyer" },
  ];

  return (
    <>
      <HeaderComponent>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          className="logo"
        />
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        {menu.map(({ path, title }) => (
          <NavButtonComponent
            key={title}
            onClick={() => navigate(path)}
            title={title}
            className="bg-primary border-darkgreen text-[30px] mb-1"
          />
        ))}
      </nav>
    </>
  );
};
