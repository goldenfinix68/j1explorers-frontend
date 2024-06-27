import React from "react";
import { useNavigate } from "react-router-dom";

export const TourDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="ml-4 text-[16.2px] font-bold">
      <div>
        <div className="text-center text-[25px] font-bold text-secondary">
          Booking Details
        </div>
        <div className="flex">
          <div className="text-secondary">Date tour booked:</div>
          &nbsp;
          <div className="text-darkyellow">2 February 20xx</div>
        </div>
        <div className="flex">
          <div className="text-secondary">Total pack members:</div>
          &nbsp;
          <div className="text-darkyellow">3</div>
        </div>
        <div className="flex">
          <div className="text-secondary">Your tour price:</div>
          &nbsp;
          <div className="text-darkyellow">$1000</div>
        </div>
      </div>
      <br />
      <div>
        <div className="text-center text-[25px] font-bold text-secondary">
          Grand Canyon/Hoover Dam
        </div>
        <div className="flex text-secondary">
          <div className="text-secondary">Tour start:</div>
          &nbsp;
          <div className="text-primary">Los Angeles</div>
        </div>
        <div className="flex">
          <div className="text-secondary">Tour end:</div>
          &nbsp;
          <div className="text-secondary">New York City</div>
        </div>
        <div className="flex">
          <div className="text-secondary">Main tour price:</div>
          &nbsp;
          <div className="text-darkyellow">$1000</div>
        </div>
      </div>
      <br />
      <div>
        <div className="text-center text-[25px] font-bold text-secondary">
          Additions
        </div>
        <div>
          <div className="text-center text-[19.08px] font-bold text-secondary">
            Tours
          </div>
          <div className="flex">
            <div className="text-secondary">Additional tour name:</div>
            &nbsp;
            <div className="text-darkyellow">Hoover Dam/Grand Canyon</div>
          </div>
          <div className="flex">
            <div className="text-secondary">Additional tour date:</div>
            &nbsp;
            <div className="text-darkyellow">2 February 20xx</div>
          </div>
          <div className="flex">
            <div className="text-secondary">Date additional tour booked:</div>
            &nbsp;
            <div className="text-darkyellow">2 February 20xx</div>
          </div>
          <div className="flex">
            <div className="text-secondary">Additional tour price:</div>
            &nbsp;
            <div className="text-darkyellow">$1000</div>
          </div>
        </div>
        <br />
        <div>
          <div className="text-center text-[19.08px] font-bold text-secondary">
            Days
          </div>
          <div className="flex">
            <div className="text-secondary">Additional days date:</div>
            &nbsp;
            <div className="text-darkyellow">2 February 20xx</div>
          </div>
          <div className="flex">
            <div className="text-secondary">Date additional day(s) booked:</div>
            <div className="text-darkyellow">2 February 20xx</div>
          </div>
          <div className="flex">
            <div className="text-secondary">Additional days price:</div>
            &nbsp;
            <div className="text-darkyellow">$1000</div>
          </div>
        </div>
      </div>
      <br />
      <div className="text-center text-[21px]">
        <div className="text-secondary">Total Paid</div>
        <div className="text-darkyellow">$1000</div>
      </div>
      <button onClick={() => navigate("/")}>Back to Main</button>
    </div>
  );
};
