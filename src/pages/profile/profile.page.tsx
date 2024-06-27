import React from "react";
import RecordComponent from "../../components/record.component";
import { RecordDetail } from "../../type";

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
    <div className="text-[19.33px] text-center font-bold mx-3 pl-8">
      <div>
        <div className="text-[29px] text-secondary">Your profile</div>
        {profile.map(({ title, description }) => (
          <RecordComponent
            key={title}
            title={title}
            description={description}
            title_style="text-secondary"
            description_style="text-darkyellow"
          />
        ))}
      </div>
      <div>
        <div className="text-[29px] text-secondary">Pack members</div>
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
    </div>
  );
};
