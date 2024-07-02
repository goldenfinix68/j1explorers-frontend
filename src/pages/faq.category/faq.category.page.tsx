import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import { faqs } from "../../consts/api_data";
import { FAQCategoryParams } from "./type";

export const FAQCategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<FAQCategoryParams>();

  return (
    <>
      <HeaderComponent>
        <Link to="/faq">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>FAQs</span>
          <span>{faqs[Number(category)].category}</span>
        </div>
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        {faqs[Number(category)].content.map(({ q }, index) => (
          <NavButtonComponent
            type={false}
            key={q}
            onClick={() => navigate(index.toString())}
            titleComponent={<div className="mr-[6px] text-left">{q}</div>}
            className="bg-secondary border-darkyellow text-[19.291px] py-[11px] mb-1 leading-none font-light"
          />
        ))}
      </nav>
    </>
  );
};
