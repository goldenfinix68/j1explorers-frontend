import React from "react";
import { NavButtonProps } from "./type";

export const NavButtonComponent: React.FC<NavButtonProps> = ({
  type = true,
  onClick,
  title,
  className,
  titleComponent,
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-full flex justify-between items-center ${className} text-white border-[3px] rounded-xl pl-[11px] pr-2`}
    >
      {type ? <span>{title}</span> : titleComponent}
      <img src={`${process.env.PUBLIC_URL}/assets/images/right.png`} />
    </button>
  );
};
