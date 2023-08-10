import { Box, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../constants/colors";
import PaperSkeleton from "./PaperSkeleton";

type PaperProps = {
  loading?: boolean;
  text: string;
};

export default function Paper({ loading, text }: PaperProps) {
  return (
    <Box sx={styles.container}>
      {loading ? (
        <PaperSkeleton />
      ) : (
        <Box contentEditable={true} sx={styles.paper}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Box>
      )}
    </Box>
  );
}

Paper.defaultProps = {
  loading: false,
};

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    width: "calc(100% - 300px)",
    minWidth: "400px",
    minHeight: "2700px",
    padding: "100px",
    backgroundColor: Colors.background,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    mx: "auto",

    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 200px)",
      padding: "80px 50px",
    },

    [theme.breakpoints.down(700)]: {
      minWidth: "200px",
      width: "calc(100% - 120px)",
    },
  }),

  paper: {
    width: "100%",
    minHeight: "100%",
    height: "auto",
    outline: "none !important",
    fontFamily: "Lato Regular",
    fontSize: 18,
  },
};
