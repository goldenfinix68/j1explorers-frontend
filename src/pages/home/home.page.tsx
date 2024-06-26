import React from "react";
import { useNavigate } from "react-router-dom";
import { NavButton } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const menu = [
    { path: "/page1", title: "Your Tour Details" },
    { path: "/page2", title: "Profile/Pack Members" },
    { path: "/page3", title: "Schedule/Reservations" },
    { path: "/page4", title: "Recommended Apps" },
    { path: "/page5", title: "Contact/Links" },
    { path: "/page6", title: "FAQs" },
    { path: "/page7", title: "Terms & Conditions" },
    { path: "/page8", title: "J1E Website/Flyer" },
  ];

  return (
    <>
      <HeaderComponent />
      <nav className="flex flex-col mx-2">
        {menu.map(({ path, title }) => (
          <NavButton
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
