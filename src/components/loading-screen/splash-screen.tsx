import { m } from "framer-motion";
import { useState, useEffect } from "react";

import { alpha } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

// ----------------------------------------------------------------------

export default function SplashScreen({ sx, ...other }: BoxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      sx={{
        right: 0,
        width: 1,
        bottom: 0,
        height: 1,
        zIndex: 9998,
        display: "flex",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        ...sx,
      }}
      {...other}
    >
      <>
        <m.div
          animate={{
            scale: [1, 0.9, 0.9, 1, 1],
            opacity: [1, 0.48, 0.48, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Box
            component="img"
            src="/assets/images/logo.png"
            sx={{ width: "75%", marginX: "auto", cursor: "pointer", ...sx }}
          />
        </m.div>
      </>
    </Box>
  );
}
