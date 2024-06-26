import React from "react";
import RecordComponent from "../../components/record.component";
import { RecordDetail } from "../../type";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";
import { Link } from "react-router-dom";

export const ProfilePage: React.FC = () => {
  const profile: RecordDetail[] = [
    { title: "Name", description: "John Sanderson" },
    { title: "Gender", description: "Male" },
    { title: "Birthdate", description: "2 February 20xx" },
    { title: "Email", description: "jsanderson@j1explorers.com" },
    { title: "Phone", description: "+1 307-757-6430" },
    { title: "WhatsApp", description: "+1 307-757-6430" },
    { title: "Employer", description: "Fun Lodge" },
    { title: "Passport country", description: "United States" },
    { title: "Birth city", description: "Manhattan" },
    { title: "Passport #", description: "xxx xxx xxxx" },
    { title: "Expiration date", description: "2 February 20xx" },
  ];
  const packMembers: RecordDetail[] = [
    { title: "Member 1", description: "John Sanderson" },
    { title: "Member 2", description: "John Sanderson" },
    { title: "Member 3", description: "John Sanderson" },
    { title: "Member 4", description: "John Sanderson" },
  ];
  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] font-bold text-center leading-[24.16px]">
          <span>Profile/</span>
          <span>Pack members</span>
        </div>
      </HeaderComponent>
      <div className="mt-[18px] text-[19.33px] text-center font-bold mx-3">
        <DividerComponent />
        <div className="pl-8 mb-4">
          <div className="text-[29px] text-secondary">Your profile</div>
          {profile.map(({ title, description }) => (
            <RecordComponent
              key={title}
              title={title}
              description={description}
              title_style="text-secondary"
              description_style="text-darkyellow"
              className="flex leading-tight"
            />
          ))}
        </div>
        <DividerComponent />
        <div className="pl-8">
          <div className="text-[29px] text-secondary leading-loose">
            Pack members
          </div>
          {packMembers.map(({ title, description }) => (
            <RecordComponent
              key={title}
              title={title}
              description={description}
              title_style="text-secondary"
              description_style="text-darkyellow"
            />
          ))}
        </div>
        <div className="w-full flex">
          <button className="bg-darkgreen border-[3px] border-primary rounded-xl px-[22px] py-2 text-white text-[24.16px] leading-none font-light mt-6 mr-5 ml-auto">
            Edit
          </button>
        </div>
      </div>
    </>
  );
};
