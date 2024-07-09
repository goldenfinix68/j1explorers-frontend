import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import { FAQCategoryParams } from "./type";
import { useFetchFaqsByCategoryQuery } from "../../service/faqService";
import { useFetchCategoryByIdQuery } from "../../service/categoryService";
import { Direction } from "../../type";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";

export const FAQCategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams<FAQCategoryParams>();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  const { data, error, isLoading } = useFetchFaqsByCategoryQuery(
    Number(category)
  );
  const { data: categoryData } = useFetchCategoryByIdQuery(Number(category));

  return (
    <>
      <HeaderComponent>
        <Link to="/faq" onClick={() => handleDirection(-1)}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>FAQs</span>
          <span>{categoryData?.title}</span>
        </div>
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        {data?.faqs.map(({ id, question }) => (
          <NavButtonComponent
            type={false}
            key={id}
            onClick={() => handleNavigation(id.toString())}
            titleComponent={
              <div className="mr-[6px] text-left">{question}</div>
            }
            className="bg-secondary border-darkyellow text-[19.291px] py-[11px] mb-1 leading-none font-light"
          />
        ))}
      </nav>
    </>
  );
};
