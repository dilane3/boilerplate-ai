import {
  Box,
  // Button,
  SxProps,
  Theme,
} from "@mui/material";

import bgImage from "../../../assets/images/bg2.jpg";
import googleIcon from "../../../assets/images/google.png";
import { Colors } from "../../../constants/colors";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";
import { Link } from "react-router-dom";
import { authProvider } from "../../../api/auth";

export default function AuthPage(): React.ReactNode {
  // Handlers
  const handleGoogleLogin = async () => {
    await authProvider.googleLogin();
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.login}>
        <Text text="Login into your account" style={styles.title} />

        <Button
          variant="text"
          style={{
            height: 50,
            px: 4,
            backgroundColor: "#FFF",
            borderRadius: "10px",
            mb: 3,
            width: "100%",
          }}
          onClick={handleGoogleLogin}
        >
          <img
            src={googleIcon}
            style={{
              height: "30px",
              width: "30px",
              position: "relative",
              left: "-20px",
            }}
          />
          <Text
            text="Google"
            style={{
              fontFamily: "Lato Regular",
              color: Colors.blackBold,
              fontSize: 20,
              paddingLeft: "10px",
              textTransform: "capitalize",
            }}
          />
        </Button>
        <Text
          text="We are responsible for the security of your writings. Login and start writing."
          style={{
            fontFamily: "Lato Regular",
            fontSize: 16,
            color: "#fff",
            mb: 3,
          }}
        />
        <Box
          sx={{
            display: "flex",
            mb: 4,
          }}
        >
          <Text
            text="Check our "
            style={{
              fontFamily: "Lato Regular",
              fontSize: 16,
              color: "#fff",
            }}
          />
          <Text text="terms and conditions." style={styles.condition} />
        </Box>

        <Link to="/">
          <Text
            text="Boilerplate."
            style={{
              fontFamily: "Lexend Bold",
              fontSize: 20,
              color: "#fff",
              mb: 3,
            }}
          />
        </Link>
      </Box>
      {/* <Box sx={styles.bg} /> */}
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "calc(100vh - 80px)",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflowY: "auto",
    padding: "40px",

    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      padding: "20px",
      height: "calc(100vh - 40px)",
    },

    "@media (max-height: 550px)": {
      alignItems: "flex-start",
    },
  }),

  login: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "calc(320px - 20px)",
    height: "calc(100vh - 160px)",
    padding: "40px 80px",
    backgroundColor: Colors.primary,
    borderRadius: "20px",
    zIndex: 30,

    "@media (max-height: 600px)": {
      height: 400,
    },

    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 120px)",
      padding: "40px",
    },
  }),

  title: (theme) => ({
    fontFamily: "Lexend Black",
    fontSize: 40,
    color: "#fff",
    lineHeight: 1.2,
    mb: 5,
    mt: 3,

    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  }),

  condition: {
    fontFamily: "Lato Bold",
    cursor: "pointer",
    fontSize: 16,
    color: "#fff",
    paddingLeft: "8px",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
