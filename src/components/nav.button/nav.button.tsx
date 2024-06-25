import React from "react";
import { Direction } from "../../type";
import { Button } from "@mui/material";
interface NavButtonProps {
  title: string;
  onClick: () => void;
  backgroundColor: string;
  borderColor: string;
}
export const NavButton: React.FC<NavButtonProps> = ({
  onClick,
  title,
  backgroundColor,
  borderColor,
}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-full flex justify-between items-center ${backgroundColor} ${borderColor} text-white text-[21.6px] border-[3px] rounded-xl h-[71px] pl-[11px] pr-[7px] mb-[3px]`}
    >
      {title}
      <img src="/arrow.png" />
    </button>
  );
};
