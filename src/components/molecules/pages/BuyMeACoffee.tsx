import { Box, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../constants/colors";
import Text from "../../atoms/texts/Text";
import buymeacoffeeImage from "../../../assets/images/buy-me-a-coffee.svg";
import { Link } from "react-router-dom";

export default function BuyMeACoffee() {
  return (
    <Link
      to="https://www.buymeacoffee.com/dilane3"
      target="_blank"
    >
      <Box sx={styles.container}>
        <>
          <Box sx={styles.imageContainer} className="image-container">
            <img src={buymeacoffeeImage} alt="Buy me a coffee" />
          </Box>

          <Text text="Buy me a coffee" style={styles.text} />
        </>
      </Box>
    </Link>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    position: "fixed",
    bottom: 20,
    left: 20,
    minWidth: 100,
    minHeight: 40,
    borderRadius: 4,
    padding: 2,
    py: 1,
    backgroundColor: Colors.background,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    zIndex: 200,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    transition: "all 2s ease-in-out",
    opacity: 0.8,

    "&:hover": {
      "& > *": {
        animation: "initial",
      },

      "& > .image-container": {
        transition: "all 1s ease-in-out",
        transform: "scale(1.4)",
      },
    },
  },

  imageContainer: {
    transition: "transform 2s ease-in-out",
    animation: "shake 2s infinite ease-in-out",

    "@keyframes shake": {
      "0%": {
        transform: "translateX(0px)",
      },
      "5%": {
        transform: "translateX(-20px)",
      },
      "10%": {
        transform: "translateX(20px)",
      },
      "20%": {
        transform: "translateX(-15px)",
      },
      "30%": {
        transform: "translateX(15px)",
      },
      "40%": {
        transform: "translateX(-10px)",
      },
      "50%": {
        transform: "translateX(10px)",
      },
      "60%": {
        transform: "translateX(-5px)",
      },
      "70%": {
        transform: "translateX(5px)",
      },
      "80%": {
        transform: "translateX(-2px)",
      },
      "90%": {
        transform: "translateX(2px)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },

    "& > img": {
      width: 50,
      height: 50,
      mr: 1,
    },
  },

  text: {
    fontFamily: "Lexend Bold",
    color: Colors.black,

    animation: "shake2 2s infinite ease-in-out",

    "@keyframes shake2": {
      "0%": {
        transform: "translateX(0px)",
      },
      "15%": {
        transform: "translateX(0px)",
      },
      "18%": {
        transform: "translateX(30px)",
      },
      "30%": {
        transform: "translateX(-10px)",
      },
      "35%": {
        transform: "translateX(5px)",
      },
      "40%": {
        transform: "translateX(-5px)",
      },
      "45%": {
        transform: "translateX(2px)",
      },
      "50%": {
        transform: "translateX(-2px)",
      },
      "55%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  },
};
