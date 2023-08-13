import { Box, CardMedia, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import { Colors } from "../../../constants/colors";

type TutorialProps = {
  reverse?: boolean;
  title: string;
  description: string;
  btn: React.ReactNode;
  image: string;
};

export default function Tutorial({
  reverse,
  title,
  description,
  btn,
  image,
}: TutorialProps): React.ReactNode {
  const style = reverse ? styles.containerReverse : styles.container;

  return (
    <Box component="section" sx={style}>
      <Box sx={styles.left}>
        <CardMedia component="img" width="70%" image={image} alt="step" />
      </Box>
      <Box sx={styles.right}>
        <Text text={title} style={styles.title} />
        <Text text={description} style={styles.description} />

        {btn}
      </Box>
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }),

  containerReverse: (theme) => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row-reverse",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }),

  left: (theme) => ({
    width: "50%",
    minHeight: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: 200,
    }
  }),

  right: (theme) => ({
    width: "50%",
    minHeight: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      alignItems: "center",
    },
  }),

  title: (theme) => ({
    width: "100%",
    fontFamily: "Lexend Bold",
    fontSize: 40,
    color: Colors.black,
    mb: 2,

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }),

  description: (theme) => ({
    width: "100%",
    fontFamily: "Lato Regular",
    fontSize: 20,
    color: Colors.black,
    mb: 3,

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }),

  btnText: {
    fontFamily: "Lexend Regular",
  },
};
