import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import { HeaderComponent } from "../../components/header";
import { useFetchCategoriesQuery } from "../../service/categoryService";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { Direction } from "../../type";
import { LoadingScreen } from "../../components/loading-screen";

export const FAQPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchCategoriesQuery();
  const dispatch = useDispatch();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HeaderComponent>
        <Link to="/" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>FAQs</span>
          <span>Categories</span>
        </div>
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        <NavButtonComponent
          onClick={() => handleNavigation("main")}
          title="Included/Not Included"
          className="bg-secondary border-darkyellow text-[23.91px] py-[11px] mb-1"
        />
        {data?.categories.map(({ id, title }) => (
          <NavButtonComponent
            key={title}
            onClick={() => handleNavigation(id.toString())}
            title={title}
            className="bg-secondary border-darkyellow text-[23.91px] py-[11px] mb-1"
          />
        ))}
      </nav>
    </>
  );
};
