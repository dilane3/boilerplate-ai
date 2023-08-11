import { Box, SxProps, Theme } from "@mui/material";
import Text from "../atoms/texts/Text";
import { Colors } from "../../constants/colors";
import { useEffect, useState } from "react";
import { sleep } from "../../utils/async";
import useAuth from "../../hooks/useAuth";

type LoadLayoutProps = {
  children: React.ReactNode;
};

export default function LoadLayout({ children }: LoadLayoutProps) {
  const bodyContainer = document.querySelector("body");

  // Local state
  const [loading, setLoading] = useState(true);

  // Use Auth

  useAuth();

  // Use Effects

  useEffect(() => {
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [bodyContainer]);

  // Some handlers

  const handleLoad = async () => {
    await sleep(3000);

    setLoading(false);
  };

  return (
    <>
      {children}

      {loading && (
        <Box sx={styles.container}>
          <Text text="Boilerplate" style={styles.text} />

          <Box sx={styles.loaderContainer}>
            <Box sx={styles.loaderContent} />
          </Box>
        </Box>
      )}
    </>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    backgroundColor: Colors.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,

    // disable scroll
    overflow: "hidden",
  },

  text: {
    fontFamily: "Lexend Black",
    fontSize: 25,
    color: Colors.background,
    mb: 2,
  },

  loaderContainer: {
    width: 100,
    height: 3,
    backgroundColor: Colors.grayLight,
    border: "2px solid #fff",
  },

  loaderContent: {
    width: 0,
    height: "100%",
    backgroundColor: Colors.primary,
    animation: "loading 3s infinite ease-in-out",

    "@keyframes loading": {
      "0%": {
        width: 0,
      },

      "60%": {
        width: "100%",
      },

      "100%": {
        width: "100%",
      },
    },
  },
};
