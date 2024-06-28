import React from "react";
import { Direction } from "../../type";
import { Button } from "@mui/material";
interface NavButtonProps {
  title: string;
  onClick: () => void;
  className: string;
}
export const NavButtonComponent: React.FC<NavButtonProps> = ({
  onClick,
  title,
  className,
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-full flex justify-between items-center ${className} text-white border-[3px] rounded-xl py-[11px] pl-[11px] pr-2 mb-[3px]`}
    >
      <span>{title}</span>
      <img src={`${process.env.PUBLIC_URL}/assets/images/right.png`} />
    </button>
  );
};
