import React from "react";
import { Link } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import DividerComponent from "../../components/divider";

export const J1EPage: React.FC = () => {
  return (
    <>
      <HeaderComponent isVisible={false}>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>Website/Flyer</span>
        </div>
      </HeaderComponent>
      <div className="flex flex-col mx-2 mt-[10px] font-light">
        <DividerComponent className="border-darkgreen mb-14" />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          className="mx-7"
        />
        <NavButtonComponent
          onClick={() => {}}
          title="Visit Website"
          className="bg-secondary border-darkyellow text-[29px] mt-5 py-[11px]"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/flyer.png`}
          className="w-fit mx-auto border-[3px] border-darkgreen mt-[70px]"
        />
        <NavButtonComponent
          onClick={() => {}}
          title="See flyer"
          className="bg-secondary border-darkyellow text-[29px] mt-6 py-[11px]"
        />
      </div>
    </>
  );
};
