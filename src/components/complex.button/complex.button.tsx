import React from "react";
import { DividerComponent } from "../divider";

interface ComplexButtonProps {
  left_title: string[];
  left_className: string;
  right_title: string;
  right_className: string;
  className?: string;
  onClick: () => void;
}
export const ComplexButtonComponent: React.FC<ComplexButtonProps> = ({
  left_title,
  left_className,
  right_className,
  right_title,
  className = "flex w-full leading-none text-white font-light h-[66px] text-[18.25px] mb-1",
  onClick,
}) => {
  return (
    <div className={className} onClick={() => onClick()}>
      <div
        className={`${left_className} flex justify-between items-center w-[106px] pl-2 border-[3px] border-r-0 rounded-l-xl`}
      >
        <div className="flex flex-col">
          {left_title.map((val) => (
            <span>{val}</span>
          ))}
        </div>
        <DividerComponent className="border-white h-7" />
      </div>
      <div
        className={`${right_className} flex justify-between items-center grow pl-[11px] pr-2 border-[3px] border-l-0 rounded-r-xl`}
      >
        <span>{right_title}</span>
        <img src="/assets/images/right.png" />
      </div>
    </div>
  );
};
