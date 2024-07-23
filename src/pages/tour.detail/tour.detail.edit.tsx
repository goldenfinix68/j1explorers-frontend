import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Direction } from "../../type";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import NavButtonComponent from "../../components/nav.button";

export const TourDetailEditPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  return (
    <div className="mx-3 text-[16.2px] font-bold mb-8">
      <HeaderComponent>
        <Link to="/tour-detail" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center leading-[24.16px]">
          <span>Contact</span>
          <span>J1Explorers</span>
        </div>
      </HeaderComponent>
      <DividerComponent />
      <div className="mt-6">
        <div className="text-center text-[25px] text-secondary">
          You have to contact J1Explorers to edit your tour details
        </div>
        <NavButtonComponent
          title="Contact Page"
          className={`bg-primary border-darkgreen text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => handleNavigation("/j1explorers-contact")}
        />
      </div>
    </div>
  );
};

export default TourDetailEditPage;
