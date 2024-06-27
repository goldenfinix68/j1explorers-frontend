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
    { path: "/recommended", title: "Recommended Apps" },
    { path: "/contact", title: "Contact/Links" },
    { path: "/faq", title: "FAQs" },
    { path: "/terms", title: "Terms & Conditions" },
    { path: "/flyer", title: "J1E Website/Flyer" },
  ];

  return (
    <>
      <HeaderComponent />
      <nav className="flex flex-col mx-2">
        {menu.map(({ path, title }) => (
          <NavButtonComponent
            key={title}
            onClick={() => navigate(path)}
            title={title}
            backgroundColor="bg-primary"
            borderColor="border-darkgreen"
          />
        ))}
      </nav>
    </>
  );
};
