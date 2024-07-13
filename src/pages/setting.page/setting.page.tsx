import React, { useEffect, useState } from "react";
import { Direction } from "../../type";
import DividerComponent from "../../components/divider";
import HeaderComponent from "../../components/header";
import { Link } from "react-router-dom";
import {
  useChangePasswordMutation,
  useIsAllowedBiometricsQuery,
  useUpdateFingerprintMutation,
  useUpdateProfileMutation,
} from "../../service/userService";
import { useDispatch } from "react-redux";
import { setDirection } from "../../store/direction/direction.slice";
import { useAuth } from "../../containers/auth.provider/auth.provider";
import { Switch } from "../../components/switch";
import { PortalModal } from "../../containers/portal.modal";
import { FingerprintLoad } from "../../components/fingerprint.load";
import { FingerprintLoadModal } from "../../containers/fingerprint.load.modal";

const SettingsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { user, updateUser } = useAuth();

  const { data: isAllowedBiometrics } = useIsAllowedBiometricsQuery();

  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [changePassword] = useChangePasswordMutation();
  const [updateFingerprint] = useUpdateFingerprintMutation();

  const [username, setUsername] = useState<string>(user?.username || "");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fingerprint, setFingerprint] = useState<string>("");

  const [onShowModal, setOnShowModal] = useState<boolean>(false);
  const [onEditUserName, setOnEditUserName] = useState<boolean>(false);
  const [biometricsAllow, setBiometricsAllow] = useState<boolean>(false);

  useEffect(() => {
    if (isAllowedBiometrics) {
      setBiometricsAllow(isAllowedBiometrics.result === "yes");
    }
  }, [isAllowedBiometrics]);

  const handleBiometrics = async (status: boolean) => {
    if (status === true) setOnShowModal(true);
    else {
      await updateFingerprint({ fingerprint: null });
    }
    setBiometricsAllow(status);
  };

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleFingerprint = async (fingerprint: string) => {
    try {
      await updateFingerprint({ fingerprint }).unwrap();
      setOnShowModal(false);
    } catch (err) {
      alert("Error occured!");
    }
  };

  const handleSubmit = async () => {
    try {
      const user = await updateProfile({ username }).unwrap();

      alert("Successfully changed");
      updateUser(user);
      setOnEditUserName(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        alert("Confirm Password does not match.");
        return;
      }
      await changePassword({
        old_password: oldPassword,
        new_password: newPassword,
      }).unwrap();

      alert("Successfully changed");

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderComponent>
        <Link to="/" onClick={() => handleDirection(-1)}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/left_green.png`} />
        </Link>
        <div className="flex flex-col text-secondary text-[29px] font-bold text-center leading-[24.16px]">
          <span>Account</span>
          <span>Settings</span>
        </div>
      </HeaderComponent>
      <div className="mt-[18px] text-[24.16px] text-center font-bold mx-3 mb-8 text-darkyellow">
        <DividerComponent />
        <div className="pl-4 my-4">
          <div className="text-secondary mb-2">Username</div>
          {onEditUserName ? (
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-darkyellow text-center mb-1"
            />
          ) : (
            <div className="mb-1">{username}</div>
          )}
          {onEditUserName ? (
            <div className="w-full flex">
              <button
                className="bg-darkgreen border-[3px] border-primary rounded-xl px-[22px] py-2 text-white text-[24.16px] leading-none font-light mt-6 mr-5 ml-auto"
                onClick={() => handleSubmit()}
                disabled={isUpdating}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="w-full flex">
              <button
                className="bg-darkgreen border-[3px] border-primary rounded-xl px-[22px] py-2 text-white text-[24.16px] leading-none font-light mt-6 mr-5 ml-auto"
                onClick={() => setOnEditUserName(true)}
                disabled={isUpdating}
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <DividerComponent />
        <div className="my-4">
          <div className="text-secondary mb-2">Password</div>
          <input
            required
            type="password"
            placeholder="Current password"
            className="border border-darkyellow text-center outline-secondary placeholder-secondary mb-3"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="New password"
            className="border border-darkyellow text-center outline-secondary placeholder-secondary mb-3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Confirm password"
            className="border border-darkyellow text-center outline-secondary placeholder-secondary mb-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="w-full flex">
            <button
              className="bg-darkgreen border-[3px] border-primary rounded-xl px-[22px] py-2 text-white text-[24.16px] leading-none font-light mt-4 mr-5 ml-auto"
              onClick={() => handlePassword()}
            >
              Save
            </button>
          </div>
        </div>
        <DividerComponent />
        <div className="pl-4 my-4">
          <div className="text-secondary mb-2">Biometrics</div>
          <Switch
            title={"Fingerprint"}
            status={biometricsAllow}
            setStatus={(status) => handleBiometrics(status)}
          />
          {onShowModal && (
            <PortalModal>
              <FingerprintLoadModal
                setFingerprint={(fingerprint) => handleFingerprint(fingerprint)}
                closeModal={() => setOnShowModal(false)}
              />
            </PortalModal>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
