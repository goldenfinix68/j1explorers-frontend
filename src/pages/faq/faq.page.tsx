import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import { faqs } from "../../consts/api_data";

export const FAQPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>FAQs</span>
          <span>Categories</span>
        </div>
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        {faqs.map(({ category, content }, index) => (
          <NavButtonComponent
            key={category}
            onClick={() => navigate(index.toString())}
            title={category}
            className="bg-secondary border-darkyellow text-[23.91px] py-[11px] mb-1"
          />
        ))}
      </nav>
    </>
  );
};
