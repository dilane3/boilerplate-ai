import { Box, SxProps, Theme } from "@mui/material";
import Text from "../atoms/texts/Text";
import { Colors } from "../../constants/colors";
import { Link } from "react-router-dom";

export default function Footer(): React.ReactNode {
  return (
    <Box component="footer" sx={styles.container}>
      <Box sx={styles.top}>
        <Box sx={styles.item}>
          <Link to="/">
            <Text text="Home" style={styles.itemText} />
          </Link>
        </Box>

        <Box sx={styles.item}>
          <Link to="/team">
            <Text text="Team" style={styles.itemText} />
          </Link>
        </Box>

        <Box sx={styles.item}>
          <Link to="https://github.com/dilane3/boilerplate.git" type="_blanc">
            <Text text="Github" style={styles.itemText} />
          </Link>
        </Box>
      </Box>

      <Box sx={styles.bottom}>
        <Text text="© 2023 Boilerplate" style={styles.itemText} />
      </Box>
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 200px)",
    padding: "20px 100px",
    backgroundColor: Colors.secondary,

    [theme.breakpoints.down("md")]: {
      padding: "10px 50px",
      width: "calc(100% - 100px)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10px 20px",
      width: "calc(100% - 40px)",
    }
  }),

  top: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 10,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 5,
    }
  }),

  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    mt: 8
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "cacl(100% / 3 - 20px)",
  },

  itemText: {
    fontFamily: "Lexend Regular",
    fontSize: 16,
    color: Colors.background,
  },
};
