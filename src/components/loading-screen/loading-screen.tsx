import { CircularProgress } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

// ----------------------------------------------------------------------

export default function LoadingScreen({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        px: 5,
        width: 1,
        flexGrow: 1,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
      {...other}
    >
      <CircularProgress sx={{ marginY: "auto" }} />
    </Box>
  );
}
