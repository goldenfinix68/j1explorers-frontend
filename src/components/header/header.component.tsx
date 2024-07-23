import React, { useEffect, useState } from "react";
import "./header.component.css";
import { HeaderComponentProps } from "./type";
import { useAuth } from "../../auth/hooks";
import { useFetchTourQuery } from "../../service/tourService";
import { Location } from "../../type";
import { CITIES } from "../../consts";
import { ADDITION_DAYS_TYPE } from "../../consts/tourType";

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  children,
  isVisible = true,
}) => {
  const { user } = useAuth();
  const { data } = useFetchTourQuery();

  const [from, setFrom] = useState<Location>("la");
  const [to, setTo] = useState<Location>("nyc");

  const [startDay, setStartDay] = useState<number>(3);
  const [endDay, setEndDay] = useState<number>(9);

  useEffect(() => {
    if (data) {
      if (data.type) {
        setFrom("la");
        setTo("nyc");
      } else {
        setFrom("nyc");
        setTo("la");
      }

      const { start, end } = ADDITION_DAYS_TYPE[data.addition_days_type];
      setStartDay(startDay - start);
      setEndDay(endDay + end);
    }
  }, [data]);

  return (
    <div className="mt-5 mb-2 mx-3">
      <div className="flex justify-between items-center mb-2">
        {children}
        <div className="text-primary text-[24.16px] font-light leading-none">
          {user?.fullname.split(" ").map((val) => (
            <div key={val}>{val}</div>
          ))}
        </div>
      </div>
      {isVisible ? (
        <div className="flex justify-center text-[14.58px] font-bold">
          <div className={data?.type ? "text-primary" : "text-secondary"}>
            start In&nbsp;
            {CITIES[from]}
            &nbsp; Sep&nbsp;
            {startDay}
          </div>
          <div className="text-darkyellow">&nbsp;|&nbsp;</div>
          <div className={data?.type ? "text-secondary" : "text-primary"}>
            end In&nbsp;
            {CITIES[to]}
            &nbsp; Sep&nbsp;
            {endDay}
          </div>
        </div>
      ) : (
        <div className="h-4"></div>
      )}
    </div>
  );
};
