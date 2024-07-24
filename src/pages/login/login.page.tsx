import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Credentials, Direction } from "../../type";
import { setDirection } from "../../store/direction/direction.slice";
import {
  useLoginByFingerprintMutation,
  useLoginMutation,
} from "../../service/userService";
import { useAuth } from "../../auth/hooks";
import { FingerprintLoad } from "../../components/fingerprint.load";
import { notifyError, notifyWarning } from "../../utils/notify";
import { Box, Button, Container, Input, Typography } from "@mui/material";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fetchMe } = useAuth();

  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const [login] = useLoginMutation();
  const [loginByFingerprint] = useLoginByFingerprintMutation();

  const handleEditEvent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleDirection = (direction: Direction) => {
    dispatch(setDirection(direction));
  };

  const handleNavigation = (link: string) => {
    handleDirection(1);
    navigate(link);
  };

  const handleFingerprint = async (fingerprint: string) => {
    try {
      const data = await loginByFingerprint({ fingerprint }).unwrap();

      fetchMe(data.token);
      handleNavigation("/");
    } catch (err) {
      notifyWarning("Can't find fingerprint!");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const data = await login(credentials).unwrap();

      fetchMe(data.token);
      handleNavigation("/");
    } catch (err) {
      notifyError("Username or Password is wrong!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="img"
        alt="Logo"
        src="/assets/images/logo.png"
        sx={{
          marginX: "auto",
          marginTop: "36px",
          marginBottom: "80px",
          width: "75%",
        }}
      />

      <Box component="form" onSubmit={handleSubmit} sx={{ marginX: "12px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginX: "24px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ff991f",
              fontFamily: "Myriad Pro, sans-serif",
              fontSize: "21.7px",
            }}
          >
            Username
          </Typography>
          <Input
            value={credentials.username}
            required
            name="username"
            onChange={handleEditEvent}
            sx={{
              fontFamily: "Myriad Pro, sans-serif",
              fontSize: "32.54px",
              color: "#c56600",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginX: "24px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ff991f",
              fontFamily: "Myriad Pro, sans-serif",
              fontSize: "21.7px",
            }}
          >
            Password
          </Typography>
          <Input
            value={credentials.password}
            required
            name="password"
            type="password"
            onChange={handleEditEvent}
            sx={{
              fontFamily: "Myriad Pro, sans-serif",
              fontSize: "32.54px",
              color: "#c56600",
            }}
          />
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#279a45",
            border: "#055424 solid 3px",
            borderRadius: "1rem",
            fontSize: "33.33px",
            fontWeight: 400,
            fontFamily: "Myriad Pro, sans-serif",
            padding: "12px 0 12px 0",
            marginTop: "24px",
            width: "100%",
            color: "white",
            "&:hover": { backgroundColor: "#055424" },
            "&:focus": { backgroundColor: "#279a45" },
            "&:active": { backgroundColor: "#055424" },
          }}
        >
          Login
        </Button>
      </Box>
      <FingerprintLoad
        setFingerprint={(fingerprint) => handleFingerprint(fingerprint)}
        className="w-20 mx-auto mt-10 mb-4"
      />
    </Container>
  );
};
