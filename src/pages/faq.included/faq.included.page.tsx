import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import HeaderComponent from "../../components/header";
import DividerComponent from "../../components/divider";
import { SpanGroup } from "../../components/span.group/span.group";
import { useDispatch } from "react-redux";
import { Direction } from "../../type";
import { setDirection } from "../../store/direction/direction.slice";

export const FAQIncludedPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  return (
    <>
      <HeaderComponent>
        <Link to="/faq/main" onClick={() => handleDirection(-1)}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-darkgreen text-[29px] text-center font-bold leading-[24.16px]">
          <span>FAQs</span>
          <span>Included</span>
        </div>
      </HeaderComponent>
      <div className="px-3 font-light">
        <DividerComponent className="border-darkgreen" />
        <div className="text-[14.416px] leading-none mb-[13px]">
          <div className="text-darkgreen text-[19.208px] text-center font-bold mt-[14px] mb-[6px]">
            Flights
          </div>
          <SpanGroup
            content={[
              { className: "text-secondary", title: "1 between " },
              { className: "text-primary", title: "LA " },
              { className: "text-secondary", title: "& " },
              { className: "text-darkyellow", title: "Vegas " },
              { className: "text-secondary", title: "and 1 between " },
              { className: "text-darkyellow", title: "Vegas " },
              { className: "text-secondary", title: "& NYC " },
            ]}
          />
        </div>
        <DividerComponent className="border-darkgreen" />
        <div className="text-[14.416px] leading-none">
          <div className="text-darkgreen text-[19.208px] text-center font-bold mt-[14px] mb-[6px]">
            Ground Transportation
          </div>
          <SpanGroup
            content={[
              { className: "font-bold", title: "in LA: " },
              {
                className: "",
                title: "1 FlyAway bus between Union Station & airport",
              },
            ]}
            className="mb-[13px] text-primary"
          />
          <SpanGroup
            content={[
              { className: "font-bold", title: "in Vegas: " },
              {
                title: "1 shuttle in each direction between hotel & airport",
              },
            ]}
            className="mb-[13px] text-darkyellow"
          />
          <SpanGroup
            content={[
              { className: "font-bold", title: "in NYC: " },
              {
                title:
                  "1 Airtrain between Penn Station (Newark) & airport trains both directions between Penn Station (Newark) & Manhattan each day hop-on/off is included",
              },
            ]}
            className="mb-[13px] text-secondary"
          />
        </div>
        <DividerComponent className="border-darkgreen" />
        <div className="text-[14.416px] leading-none mb-[13px]">
          <div className="text-darkgreen text-[19.208px] text-center font-bold mt-[14px] mb-[6px]">
            Accommodations
          </div>
          <SpanGroup
            content={[
              {
                title:
                  "6 nights for standard tour and an additional night for each optional day added",
              },
            ]}
            className="mb-[13px] text-secondary"
          />
        </div>
        <DividerComponent className="border-darkgreen" />
        <div className="text-[14.416px] leading-none">
          <div className="text-darkgreen text-[19.208px] text-center font-bold mt-[14px] mb-[6px] tracking-tight">
            Hop-on/off (daytime) sightseeing bus tours
          </div>
          <SpanGroup
            content={[
              { className: "font-bold", title: "in LA: " },
              {
                title:
                  "1 for standard tour and additional day if optional LA day added",
              },
            ]}
            className="mb-[13px] text-primary"
          />
          <SpanGroup
            content={[
              { className: "font-bold", title: "in Vegas: " },
              {
                title:
                  "2 unless optional Grand Canyon/Hoover Dam tour chosen which replaces 1",
              },
            ]}
            className="mb-[13px] text-darkyellow"
          />
          <SpanGroup
            content={[
              { className: "font-bold", title: "in NYC: " },
              {
                title:
                  "1 for standard tour and additional day if optional NYC day added",
              },
            ]}
            className="mb-[13px] text-secondary"
          />
        </div>
        <DividerComponent className="border-darkgreen" />
        <div className="text-[14.416px] leading-none">
          <div className="text-darkgreen text-[19.208px] text-center font-bold mt-[14px] mb-[6px]">
            Other sightseeing tours
          </div>
          <SpanGroup
            content={[
              { className: "font-bold", title: "in Vegas: " },
              {
                title: "1 night bus tour",
              },
              {
                className: "",
                title:
                  "1 Grand Canyon/Hoover Dam tour (optional w/ additional fee)",
              },
            ]}
            className="mb-[13px] text-darkyellow flex flex-col"
          />
          <SpanGroup
            content={[
              { className: "font-bold", title: "in NYC: " },
              {
                title: "1 night bus tour",
              },
              {
                title: "1 Harbor/Statue of Liberty cruise",
              },
            ]}
            className="mb-[13px] text-secondary flex flex-col"
          />
        </div>
      </div>
    </>
  );
};
