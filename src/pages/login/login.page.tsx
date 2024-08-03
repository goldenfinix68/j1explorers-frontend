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
import {
  Box,
  Button,
  Container,
  Input,
  Typography,
  useTheme,
} from "@mui/material";

export const LoginPage: React.FC = () => {
  const theme = useTheme();
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
    } catch (err) {
      notifyWarning("Can't find fingerprint!");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const data = await login(credentials).unwrap();

      fetchMe(data.token);
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
              color: theme.palette.secondary.main,
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
              fontSize: "32.54px",
              color: theme.palette.secondary.dark,
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
              color: theme.palette.secondary.main,
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
              color: theme.palette.secondary.dark,
            }}
          />
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderColor: theme.palette.primary.dark,
            borderWidth: "3px",
            borderStyle: "solid",
            borderRadius: "1rem",
            fontSize: "33.33px",
            fontWeight: 400,
            padding: "12px 0 12px 0",
            marginTop: "24px",
            width: "100%",
            color: "white",
            "&:hover": { backgroundColor: theme.palette.primary.light },
            "&:focus": { backgroundColor: theme.palette.primary.main },
            "&:active": { backgroundColor: theme.palette.primary.light },
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
