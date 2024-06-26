import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../components/header";
import DividerComponent from "../../components/divider";

export const TermsPage: React.FC = () => {
  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>Terms &</span>
          <span>Conditions</span>
        </div>
      </HeaderComponent>
      <div className="flex flex-col mx-2 mt-[10px] font-light">
        <DividerComponent className="border-primary" />
      </div>
    </>
  );
};
