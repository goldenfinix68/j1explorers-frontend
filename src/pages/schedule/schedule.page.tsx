import React from "react";
import { useNavigate } from "react-router-dom";
import NavButtonComponent from "../../components/nav.button";

export const SchedulePage: React.FC = () => {
  const navigate = useNavigate();

  const scheduleArray = [
    {
      title: "Optional Additional Day",
      backgroundColor: "bg-primary",
      borderColor: "border-darkgreen",
    },
    {
      title: "September 3rd",
      backgroundColor: "bg-primary",
      borderColor: "border-darkgreen",
    },
    {
      title: "September 4th",
      backgroundColor: "bg-primary",
      borderColor: "border-darkgreen",
    },
    {
      title: "September 5th",
      backgroundColor: "bg-darkyellow",
      borderColor: "border-secondary",
    },
    {
      title: "September 6th",
      backgroundColor: "bg-darkyellow",
      borderColor: "border-secondary",
    },
    {
      title: "September 7th",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
    },
    {
      title: "September 8th",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
    },
    {
      title: "September 9th",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
    },
    {
      title: "Optional Additional Day",
      backgroundColor: "bg-secondary",
      borderColor: "border-darkyellow",
    },
  ];
  return (
    <div className="mx-[13px] text-[11.67px] font-bold">
      {scheduleArray.map(({ title, backgroundColor, borderColor }) => (
        <NavButtonComponent
          title={title}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          onClick={() => {}}
        />
      ))}
      <button onClick={() => navigate("/")}>Back to Main</button>
    </div>
  );
};
