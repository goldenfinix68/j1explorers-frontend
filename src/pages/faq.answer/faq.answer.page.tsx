import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../../components/header";
import { FAQAnswerParams } from "./type";
import { useFetchFaqByIdQuery } from "../../service/faqService";
import { useFetchCategoryByIdQuery } from "../../service/categoryService";
import { useDispatch } from "react-redux";
import { Direction } from "../../type";
import { setDirection } from "../../store/direction/direction.slice";

export const FAQAnswerPage: React.FC = () => {
  const { category, question } = useParams<FAQAnswerParams>();
  const dispatch = useDispatch();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const { data: categoryData } = useFetchCategoryByIdQuery(Number(category));
  const { data: faqData } = useFetchFaqByIdQuery(Number(question));

  return (
    <>
      <HeaderComponent>
        <Link to={`/faq/${category}`} onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center font-bold leading-[24.16px]">
          <span>FAQs</span>
          <span>{categoryData?.title}</span>
        </div>
      </HeaderComponent>
      <nav className="flex flex-col mx-2 mt-[10px] font-light">
        <div className="text-secondary text-[19.208px] text-center font-bold mt-[14px] mb-[6px] tracking-tight">
          {faqData?.question}
        </div>
        <div className="text-[14.416px] leading-none text-darkyellow">
          {faqData?.answer}
        </div>
      </nav>
    </>
  );
};
