import { Box, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../constants/colors";

export default function Paper() {
  return <Box sx={styles.container}></Box>;
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    width: "calc(100% - 200px)",
    minWidth: "400px",
    minHeight: "700px",
    padding: "50px",
    backgroundColor: Colors.background,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    mx: "auto",

    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 200px)",
      padding: "80px 50px",
    },

    [theme.breakpoints.down(700)]: {
      minWidth: "200px",
      width: "calc(100% - 80px)",
      padding: "0 20px",
    }
  }),
};
