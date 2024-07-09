import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Direction } from "../../type";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";

export const TourDetailEditPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  return (
    <div className="mx-3 text-[16.2px] font-bold mb-8">
      <HeaderComponent>
        <Link to="/tour-detail" onClick={() => handleDirection(-1)}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center leading-[24.16px]">
          <span>Your Tour</span>
          <span>Details</span>
        </div>
      </HeaderComponent>
      <DividerComponent />
      <div className="mt-6">
        <div className="text-center text-[25px] text-secondary">
          Contact J1Explorers
        </div>
      </div>
    </div>
  );
};

export default TourDetailEditPage;
