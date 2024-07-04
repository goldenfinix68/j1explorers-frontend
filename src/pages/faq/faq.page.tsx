import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import { useFetchCategoriesQuery } from "../../service/categoryService";

export const FAQPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchCategoriesQuery();

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
        <NavButtonComponent
          onClick={() => navigate("0")}
          title="Included/Not Included"
          className="bg-secondary border-darkyellow text-[23.91px] py-[11px] mb-1"
        />
        {data?.categories.map(({ id, title }) => (
          <NavButtonComponent
            key={title}
            onClick={() => navigate(id.toString())}
            title={title}
            className="bg-secondary border-darkyellow text-[23.91px] py-[11px] mb-1"
          />
        ))}
      </nav>
    </>
  );
};
