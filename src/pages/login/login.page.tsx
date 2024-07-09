import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import { useDispatch } from "react-redux";
import { Credentials, Direction } from "../../type";
import { setDirection } from "../../store/direction/direction.slice";
import { useLoginMutation } from "../../service/userService";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const [login, { isLoading, data, error }] = useLoginMutation();

  const handleChange = (name: string, value: string) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmit = async () => {
    await login(credentials);
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data?.token || "");
      navigate("/");
    }
    if (error) {
      alert("Invalid Username Or Password!");
    }
  }, [data, error]);

  return (
    <div className="w-full">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
        className="mx-auto mt-9 mb-20 w-3/4"
      />
      <div className="flex flex-col mx-9 text-center text-secondary">
        <div className="flex flex-col w-full mb-10">
          <label className="text-[21.7px]">Username</label>
          <input
            type="text"
            name="username"
            className="h-[52px] border-darkyellow border text-darkyellow text-center text-[32.54px]"
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full mb-10">
          <label className="text-[21.7px]">Password</label>
          <input
            type="password"
            name="password"
            className="h-[52px] border-darkyellow border text-darkyellow text-center text-[32.54px]"
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <button onClick={() => onSubmit()}>Login</button>
      </div>
    </div>
  );
};
