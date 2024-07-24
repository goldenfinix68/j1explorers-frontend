import React, { useEffect, useState } from "react";
import {
  InputRecordComponent,
  DateRecordComponent,
} from "../../components/record.component";
import { Direction, RecordDetail, UserDetail } from "../../type";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";
import { Link } from "react-router-dom";
import { useUpdateProfileMutation } from "../../service/userService";
import { profileKeyMap } from "./keyMap";
import { processString } from "../../utils/processString";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { useAuth } from "../../auth/hooks";

const ProfileEditPage: React.FC = () => {
  const dispatch = useDispatch();
  const { user, fetchMe } = useAuth();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const [profile, setProfile] = useState<UserDetail>({});

  useEffect(() => {
    if (user) {
      const { id, ...data } = user;
      setProfile(data);
    }
  }, [user]);

  const packMembers: RecordDetail[] = [
    { title: "Member 1", description: "John Sanderson" },
    { title: "Member 2", description: "John Sanderson" },
    { title: "Member 3", description: "John Sanderson" },
    { title: "Member 4", description: "John Sanderson" },
  ];

  const handleProfile = (key: string, value: string) => {
    setProfile({ ...profile, [key]: value || "" });
  };

  const handleSubmit = async () => {
    try {
      await updateProfile(profile).unwrap();

      fetchMe();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderComponent>
        <Link to="/profile" onClick={() => handleDirection(-1)}>
          <img src="/assets/images/left_green.png" />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] font-bold text-center leading-[24.16px]">
          <span>Profile/</span>
          <span>Pack members</span>
        </div>
      </HeaderComponent>
      <div className="mt-[18px] text-[19.33px] text-center font-bold mx-3 mb-8">
        <DividerComponent />
        <div className="pl-4 mb-4">
          <div className="text-[29px] text-secondary">Your profile</div>
          {profileKeyMap.map(({ label, key }, index) =>
            key.endsWith("date") ? (
              <DateRecordComponent
                key={key}
                label={label}
                description={profile[key]}
                label_style="text-secondary"
                input_style="text-darkyellow"
                className="flex leading-tight w-full"
                icon="/assets/images/pencil.png"
                onInput={(val) => handleProfile(key, val)}
              />
            ) : (
              <InputRecordComponent
                key={key}
                label={label}
                description={processString(profile[key])}
                label_style="text-secondary"
                input_style="text-darkyellow"
                className="flex leading-tight w-full"
                icon="/assets/images/pencil.png"
                onInput={(val) => handleProfile(key, val)}
              />
            )
          )}
        </div>
        <DividerComponent />
        <div className="pl-4">
          <div className="text-[29px] text-secondary leading-loose">
            Pack members
          </div>
          {packMembers.map(({ title, description }, index) => (
            <InputRecordComponent
              key={title}
              label={title}
              description={description}
              label_style="text-secondary"
              input_style="text-darkyellow"
              icon="/assets/images/pencil.png"
              onInput={(val) => handleProfile(title, val)}
            />
          ))}
        </div>
        <div className="w-full flex">
          <button
            className="bg-darkgreen border-[3px] border-primary rounded-xl px-[22px] py-2 text-white text-[24.16px] leading-none font-light mt-6 mr-5 ml-auto"
            onClick={() => handleSubmit()}
            disabled={isUpdating}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileEditPage;
