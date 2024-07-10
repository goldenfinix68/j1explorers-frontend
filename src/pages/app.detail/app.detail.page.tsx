import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import { AppDetailParams, Direction } from "../../type";
import { isValidApps } from "../../utils/validator";
import { APP_TYPES } from "../../consts";
import DividerComponent from "../../components/divider";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";

export const AppDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { apps } = useParams<AppDetailParams>();

  if (!isValidApps(apps)) {
    return <div>Invalid Apps</div>;
  }

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  return (
    <>
      <HeaderComponent>
        <Link to="/recommend" onClick={() => handleDirection(-1)}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-none">
          <span>Apps</span>
          <span>{APP_TYPES[apps].title}</span>
        </div>
      </HeaderComponent>
      <div className="mx-3 text-center">
        <DividerComponent className="border-darkyellow" />
        <div className="text-darkyellow text-[31.708px] font-bold leading-none mb-2 mt-4">
          {APP_TYPES[apps].title}
        </div>
        <div className="text-[15.83px] text-darkyellow leading-none mx-7 italic">
          {APP_TYPES[apps].content}
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${apps}.png`}
          className="w-52 mx-auto mt-9 mb-2 "
        />
        <NavButtonComponent
          type={false}
          titleComponent={
            <div className="text-center grow leading-none text-[31.708px]">
              <div className="font-light">Download</div>
              <div className="font-bold mb-1">Android App</div>
            </div>
          }
          onClick={() => {}}
          className="bg-secondary border-darkyellow mb-2 py-0"
        />
        <NavButtonComponent
          type={false}
          titleComponent={
            <div className="text-center grow leading-none text-[31.708px]">
              <div className="font-light">Download</div>
              <div className="font-bold mb-1">iOS App</div>
            </div>
          }
          onClick={() => {}}
          className="bg-secondary border-darkyellow mb-2 py-0"
        />
      </div>
    </>
  );
};
