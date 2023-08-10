import { Box, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import { Colors } from "../../../constants/colors";
import { Link } from "react-router-dom";

type HeaderProps = {
  transparent: boolean;
  showBgLogo: boolean;
};

export default function Header({
  transparent,
  showBgLogo,
}: HeaderProps): React.ReactNode {
  return (
    <Box
      sx={styles.container}
      style={{ backgroundColor: transparent ? "transparent" : Colors.primary }}
    >
      <Link to="/">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 1,
            backgroundColor: showBgLogo ? Colors.primary : "transparent",
            borderRadius: 3,
          }}
        >
          <Text
            text="Boilerplate"
            style={{
              fontFamily: "Lexend Black",
              fontSize: 25,
              color:
                showBgLogo || !transparent ? Colors.background : Colors.primary,
            }}
          />
        </Box>
      </Link>

      <Box component="nav" sx={styles.menu}>
        <Link to="/pricing">
          <Text text="PRICING" style={styles.menuItem} />
        </Link>

        <Link to="/team">
          <Text text="CONTACT" style={styles.menuItem} />
        </Link>

        <Button
          style={{ backgroundColor: Colors.background, ml: 3 }}
          hoverColor={Colors.grayLight}
        >
          <Text text="LOGIN" style={styles.btnText} />
        </Button>
      </Box>
    </Box>
  );
}

Header.defaultProps = {
  transparent: true,
  showBgLogo: false,
};

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100% - 200px)",
    padding: "10px 100px",
    zIndex: 100,

    [theme.breakpoints.down("md")]: {
      padding: "10px 50px",
      width: "calc(100% - 100px)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "10px 20px",
      width: "calc(100% - 40px)",
    },
  }),

  menu: (theme) => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),

  menuItem: {
    fontFamily: "Lexend Regular",
    fontSize: 15,
    ml: 3,
    transition: "all 0.3s ease-in-out",
    color: Colors.background,

    "&:hover": {
      cursor: "pointer",
      fontWeight: "bold",
      textDecoration: "underline",
    },
  },

  btnText: {
    color: Colors.primary,
    fontFamily: "Lexend Regular",
    fontSize: 15,
  },
};
