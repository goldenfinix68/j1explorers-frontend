import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import { useDispatch } from "react-redux";
import { Credentials, Direction } from "../../type";
import { setDirection } from "../../store/direction/direction.slice";
import {
  useLoginByFingerprintMutation,
  useLoginMutation,
} from "../../service/userService";
import { useAuth } from "../../containers/auth.provider/auth.provider";
import { FingerprintLoad } from "../../components/fingerprint.load";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login: setUser } = useAuth();

  const [fingerprint, setFingerprint] = useState<string>("");

  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const [login, { isLoading, data, error }] = useLoginMutation();
  const [loginByFingerprint] = useLoginByFingerprintMutation();

  const handleChange = (name: string, value: string) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleFingerprint = async (fingerprint: string) => {
    try {
      const data = await loginByFingerprint({ fingerprint }).unwrap();

      setUser(data);
      navigate("/");
    } catch (err) {
      alert("Can't find the fingerprint.");
    }
  };

  const onSubmit = async () => {
    const data = await login(credentials).unwrap();

    setUser(data);
    navigate("/");
  };

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
      </div>
      <div className="mx-3">
        <button
          className="bg-primary border-[3px] border-darkgreen rounded-2xl w-full text-[33.33px] text-white py-[14px] mt-6"
          onClick={() => onSubmit()}
        >
          Login
        </button>
      </div>
      <FingerprintLoad
        setFingerprint={(fingerprint) => handleFingerprint(fingerprint)}
        className="w-20 mx-auto mt-10 mb-4"
      />
    </div>
  );
};
