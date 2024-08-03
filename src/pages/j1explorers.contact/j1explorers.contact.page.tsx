import React from "react";
import { Link } from "react-router-dom";
import { Direction } from "../../type";
import { HeaderComponent } from "../../components/header";
import { DividerComponent } from "../../components/divider";
import { NavButtonComponent } from "../../components/nav.button";
import { ContactDetailComponent } from "../../components/contact.detail";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";

export const J1ExplorersContactPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  return (
    <>
      <HeaderComponent>
        <Link to="/contact" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div
          className={`flex flex-col text-primary text-[29px] text-center font-bold leading-[24.16px]`}
        >
          <span>J1Explorers</span>
        </div>
      </HeaderComponent>
      <div className="mx-3 font-bold leading-none text-center">
        <DividerComponent className="border-primary" />
        <ContactDetailComponent
          title="Physical address"
          titleClassName="text-primary"
          content={["30 N Gould St", "Suite R", "Sheridan, WY 82801"]}
          contentClassName="text-darkgreen"
        />
        <NavButtonComponent
          title="Get directions"
          className={`bg-primary border-darkgreen text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
        <DividerComponent className="border-primary" />
        <ContactDetailComponent
          title="Email Address"
          titleClassName="text-primary"
          content={["johnsanderson@j1explorers.com"]}
          contentClassName="text-darkgreen"
        />
        <NavButtonComponent
          title="Email now"
          className={`bg-primary border-darkgreen text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
        <DividerComponent className="border-primary" />
        <ContactDetailComponent
          title="Phone number"
          titleClassName="text-primary"
          content={["+1 307-757-6430"]}
          contentClassName="text-darkgreen"
        />
        <NavButtonComponent
          title="Call now"
          className={`bg-primary border-darkgreen text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
        <DividerComponent className="border-primary" />
        <ContactDetailComponent
          title="WhatsApp"
          titleClassName="text-primary"
          content={["+1 307-757-6430"]}
          contentClassName="text-darkgreen"
        />
        <NavButtonComponent
          title="Call now"
          className={`bg-primary border-darkgreen text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
        <DividerComponent className="border-primary" />
        <ContactDetailComponent
          title="Website"
          titleClassName="text-primary"
          content={["j1explorers.com"]}
          contentClassName="text-darkgreen"
        />
        <NavButtonComponent
          title="Go to website"
          className={`bg-primary border-darkgreen text-[33.33px] mt-3 font-light mb-4 py-[11px]`}
          onClick={() => {}}
        />
      </div>
    </>
  );
};
