import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import { useFetchCategoriesQuery } from "../../service/categoryService";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { Direction } from "../../type";

export const FAQMainPage: React.FC = () => {
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
    <>
      <HeaderComponent>
        <Link to="/" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>FAQs</span>
          <span className="tracking-tight text-[22px]">
            Included/Not Included
          </span>
        </div>
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        <NavButtonComponent
          onClick={() => handleNavigation("0")}
          title="Included"
          className="bg-secondary border-darkyellow text-[23.91px] py-[11px] mb-1"
        />
        <NavButtonComponent
          onClick={() => handleNavigation("1")}
          title="Not Included"
          className="bg-secondary border-darkyellow text-[23.91px] py-[11px] mb-1"
        />
      </nav>
    </>
  );
};
