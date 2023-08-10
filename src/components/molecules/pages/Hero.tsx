import { Box, SxProps, Theme } from "@mui/material";
import bgImage from "../../../assets/images/bg1.png";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import EditIcon from "@mui/icons-material/Edit";

export default function Hero(): React.ReactNode {
  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.top}>
        <Text
          text="Get ideas for yours next writings"
          style={{
            fontFamily: "Lexend Black",
            fontSize: 70,
            color: "#fff",
            lineHeight: 1.2,
            mb: 3,
          }}
        />

        <Text
          text="We provide you with the best ideas for your next writings"
          style={{
            fontFamily: "Lato Regular",
            fontSize: 20,
            color: "#fff",
            mb: 3,
          }}
        />

        <Button style={{ height: 50, px: 4 }}>
          <EditIcon sx={{ mr: 1 }} />
          <Text text="START WRITING" style={{ fontFamily: "Lexend Regular" }} />
        </Button>
      </Box>

      <Box sx={styles.bg} />
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "calc(100% - 200px)",
    height: "calc(100vh - 80px)",
    padding: "0px 100px",
    paddingTop: "80px",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("md")]: {
      padding: "0px 50px",
      paddingTop: "80px",
      width: "calc(100% - 100px)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
      paddingTop: "80px",
      width: "calc(100% - 40px)",
    },
  }),

  top: (theme) => ({
    width: 800,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: 30,

    "& > *": {
      textAlign: "right",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
      alignItems: "center",

      "& > *": {
        textAlign: "center",
      },

      "& > p:first-child": {
        fontSize: 50,
      }
    },

    [theme.breakpoints.down("sm")]: {
      "& > p:first-child": {
        fontSize: 50,
      }
    },
  }),

  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
};
