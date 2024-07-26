import { useMemo } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#279a45",
        light: "#167734",
        dark: "#055424",
      },
      secondary: {
        main: "#ff991f",
        dark: "#c56600",
      },
    },
    typography: {
      fontFamily: ["Myriad Pro", "sans-serif"].join(","),
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
