import React from "react";
import { RecordComponent } from "../../components/record.component";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { packMembersKeyMap, profileKeyMap } from "./keyMap";
import { formatDate } from "../../utils/processDate";
import { processString } from "../../utils/processString";
import { useFetchPackMembersQuery } from "../../service/tourService";
import { Direction } from "../../type";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { useAuth } from "../../containers/auth.provider/auth.provider";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useAuth();
  const { data: packMembers } = useFetchPackMembersQuery();

  if (!user) {
    return <Navigate to="login" />;
  }

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  return (
    <>
      <HeaderComponent>
        <Link to="/" onClick={() => handleDirection(-1)}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] font-bold text-center leading-[24.16px]">
          <span>Profile/</span>
          <span>Pack members</span>
        </div>
      </HeaderComponent>
      <div className="mt-[18px] text-[19.33px] text-center font-bold mx-3 mb-8">
        <DividerComponent />
        <div className="pl-8 mb-4">
          <div className="text-[29px] text-secondary">Your profile</div>
          {profileKeyMap.map(({ label, key }) => (
            <RecordComponent
              key={key}
              label={label}
              description={
                key.endsWith("date")
                  ? formatDate(user[key], ["day", "month", "year"], "long")
                  : processString(user[key])
              }
              label_style="text-secondary"
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
          {packMembers &&
            packMembersKeyMap.map(({ label, key }) => (
              <RecordComponent
                key={key}
                label={label}
                description={packMembers[key] ? packMembers[key]?.fullname : ""}
                label_style="text-secondary"
                description_style="text-darkyellow"
              />
            ))}
        </div>
        <div className="w-full flex">
          <button
            className="bg-darkgreen border-[3px] border-primary rounded-xl px-[22px] py-2 text-white text-[24.16px] leading-none font-light mt-6 mr-5 ml-auto"
            onClick={() => handleNavigation("edit")}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
