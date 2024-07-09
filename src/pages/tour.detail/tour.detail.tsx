import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Direction, RecordDetail } from "../../type";
import { RecordComponent } from "../../components/record.component";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";
import { useFetchTourQuery } from "../../service/tourService";
import {
  getBookDate,
  getPackMembes,
  getTourStartDetail,
  getTourEndDetail,
  getTotalPrice,
  getMainTourPrice,
  getAdditionDaysDate,
  getAdditionDaysBookDate,
  getAdditionTourDate,
  getAdditionTourBookDate,
} from "./processTourResponse";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";

export const TourDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchTourQuery();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  if (!data) {
    if (error) {
      return <div>Error Occured</div>;
    }
    if (isLoading) {
      return <div>Is Loading...</div>;
    }
    return <></>;
  }

  const bookingDetails: RecordDetail[] = [
    {
      title: "Date tour booked",
      description: getBookDate(data),
    },
    { title: "Total pack members", description: getPackMembes(data) },
    {
      title: "Your tour price",
      description: `$${getTotalPrice(data)}`,
    },
  ];
  const tourDetails: RecordDetail[] = [
    {
      ...getTourStartDetail(data),
    },
    {
      ...getTourEndDetail(data),
    },
    {
      title: "Main tour price",
      description: `$${getMainTourPrice(data)}`,
      description_style: "text-darkyellow",
    },
  ];
  const additionalTour: RecordDetail[] = [
    {
      title: "Additional tour name",
      description: data.addition_tour_name,
      description_style: "tracking-tight text-darkyellow",
    },
    { title: "Additional tour date", description: getAdditionTourDate(data) },
    {
      title: "Date additional tour booked",
      description: getAdditionTourBookDate(data),
    },
    {
      title: "Additional tour price",
      description: `$${data.addition_tour_price}`,
    },
  ];
  const additionalDays: RecordDetail[] = [
    { title: "Additional days date", description: getAdditionDaysDate(data) },
    {
      title: "Date additional day(s) booked",
      description: getAdditionDaysBookDate(data),
    },
    {
      title: "Additional days price",
      description: `$${data.addition_days_price}`,
    },
  ];
  return (
    <div className="mx-3 text-[16.2px] font-bold mb-8">
      <HeaderComponent>
        <Link to="/" onClick={() => handleDirection(-1)}>
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
            label={title}
            label_style="text-secondary"
            description={description}
            description_style="text-darkyellow"
          />
        ))}
      </div>
      <br />
      <div>
        <div className="text-center text-[25px]  text-secondary">Main Tour</div>
        {tourDetails.map(
          ({ title, description, description_style }: RecordDetail) => (
            <RecordComponent
              label={title}
              label_style="text-secondary"
              description={description}
              description_style={description_style}
            />
          )
        )}
      </div>
      <br />
      <div>
        <div className="text-center text-[25px] text-secondary">Additions</div>
        <div>
          <div className="text-center text-[19.08px]  text-secondary">
            Tours
          </div>
          {additionalTour.map(
            ({ title, description, description_style = "text-darkyellow" }) => (
              <RecordComponent
                label={title}
                label_style="text-secondary tracking-tight"
                description={description}
                description_style={description_style}
              />
            )
          )}
        </div>
        <br />
        <div>
          <div className="text-center text-[19.08px] text-secondary">Days</div>
          {additionalDays.map(({ title, description }) => (
            <RecordComponent
              label={title}
              label_style="text-secondary tracking-tight"
              description={description}
              description_style="text-darkyellow"
            />
          ))}
        </div>
      </div>
      <br />
      <div className="text-center text-[29.16px] leading-none">
        <div className="text-secondary">Total Paid</div>
        <div className="text-darkyellow">${data.paid}</div>
      </div>
      <div className="w-full flex">
        <button
          className="bg-darkgreen border[3px] border-primary rounded-xl px-[22px] py-2 text-white text-[24.16px] leading-none font-light mt-6 mr-5 ml-auto"
          onClick={() => navigate("edit")}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TourDetailPage;
