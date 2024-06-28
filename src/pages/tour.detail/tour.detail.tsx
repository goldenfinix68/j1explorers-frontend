import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecordDetail } from "../../type";
import RecordComponent from "../../components/record.component";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";

export const TourDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const bookingDetails: RecordDetail[] = [
    { title: "Date tour booked", description: "2 February 20xx" },
    { title: "Total pack members", description: 3 },
    { title: "Your tour price", description: "$1000" },
  ];
  const tourDetails: RecordDetail[] = [
    {
      title: "Tour start",
      description: "Los Angeles",
      description_style: "text-primary",
    },
    {
      title: "Tour end",
      description: "New York City",
      description_style: "text-secondary",
    },
    {
      title: "Main tour price",
      description: "$1000",
      description_style: "text-darkyellow",
    },
  ];
  const additionalTour: RecordDetail[] = [
    {
      title: "Additional tour name",
      description: "Hoover Dam/Grand Canyon",
      description_style: "tracking-tight text-darkyellow",
    },
    { title: "Additional tour date", description: "2 February 20xx" },
    { title: "Date additional tour booked", description: "2 February 20xx" },
    { title: "Additional tour price", description: "$1000" },
  ];
  const additionalDays: RecordDetail[] = [
    { title: "Additional days date", description: "2 February 20xx" },
    { title: "Date additional day(s) booked", description: "2 February 20xx" },
    { title: "Additional days price", description: "$1000" },
  ];
  return (
    <div className="mx-3 text-[16.2px] font-bold">
      <HeaderComponent>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] text-center leading-[24.16px]">
          <span>Your Tour</span>
          <span>Details</span>
        </div>
      </HeaderComponent>
      <DividerComponent />
      <div className="mt-6">
        <div className="text-center text-[25px] text-secondary">
          Booking Details
        </div>
        {bookingDetails.map(({ title, description }) => (
          <RecordComponent
            title={title}
            title_style="text-secondary"
            description={description}
            description_style="text-darkyellow"
          />
        ))}
      </div>
      <br />
      <div>
        <div className="text-center text-[25px]  text-secondary">
          Grand Canyon/Hoover Dam
        </div>
        {tourDetails.map(
          ({ title, description, description_style }: RecordDetail) => (
            <RecordComponent
              title={title}
              title_style="text-secondary"
              description={description}
              description_style={description_style}
            />
          )
        )}
      </div>
      <br />
      <div>
        <div className="text-center text-[25px]  text-secondary">Additions</div>
        <div>
          <div className="text-center text-[19.08px]  text-secondary">
            Tours
          </div>
          {additionalTour.map(
            ({ title, description, description_style = "text-darkyellow" }) => (
              <RecordComponent
                title={title}
                title_style="text-secondary"
                description={description}
                description_style={description_style}
              />
            )
          )}
        </div>
        <br />
        <div>
          <div className="text-center text-[19.08px]  text-secondary">Days</div>
          {additionalDays.map(({ title, description }) => (
            <RecordComponent
              title={title}
              title_style="text-secondary"
              description={description}
              description_style="text-darkyellow"
            />
          ))}
        </div>
      </div>
      <br />
      <div className="text-center text-[21px]">
        <div className="text-secondary">Total Paid</div>
        <div className="text-darkyellow">$1000</div>
      </div>
    </div>
  );
};
