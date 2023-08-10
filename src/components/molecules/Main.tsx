import { Box, SxProps, Theme } from "@mui/material";

type MainProps = {
  children: React.ReactNode;
  pt: number;
};

export default function Main({ children, pt }: MainProps): React.ReactNode {
  return (
    <Box component="main" sx={styles.container} style={{ paddingTop: pt }}>
      {children}
    </Box>
  );
}

Main.defaultProps = {
  pt: 0,
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "block",
    width: "calc(100% - 200px)",
    height: "100%",
    padding: "20px 100px",

    [theme.breakpoints.down("md")]: {
      padding: "10px 50px",
      width: "calc(100% - 100px)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10px 20px",
      width: "calc(100% - 40px)",
    }
  }),
};