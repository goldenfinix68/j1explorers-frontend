import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NavButtonComponent } from "../../components/nav.button/nav.button";
import { useDispatch } from "react-redux";
import { Credentials, Direction } from "../../type";
import { setDirection } from "../../store/direction/direction.slice";
import { useLoginMutation } from "../../service/userService";
import { useAuth } from "../../containers/auth.provider/auth.provider";

export const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  logout();
  return <Navigate to="/login" />;
};
