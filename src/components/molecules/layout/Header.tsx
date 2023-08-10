import { Box, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import { Colors, primaryRGBA } from "../../../constants/colors";
import { Link } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import { useMemo } from "react";

type HeaderProps = {
  transparent: boolean;
  enableBgChange: boolean;
};

export default function Header({
  transparent,
  enableBgChange,
}: HeaderProps): React.ReactNode {
  const scrollableContainer = document.querySelector("body");
  const scrollDistance = useScroll(scrollableContainer);

  const { isScrolled, transparentDegree } = useMemo(() => {
    const max = window.innerHeight - 80;
    const degree = scrollDistance / max;

    const isScrolled = scrollDistance > max;
    const scrollDegree = degree > 1 ? 1 : degree;

    return { isScrolled, transparentDegree: scrollDegree };
  }, [scrollDistance]);

  return (
    <Box
      sx={styles.container}
      style={{
        backgroundColor:
          transparent || !isScrolled
            ? primaryRGBA(transparentDegree)
            : Colors.primary,
      }}
    >
      <Link to="/">
        <Text
          text="Boilerplate"
          style={{
            fontFamily: "Lexend Black",
            fontSize: 25,
            color: !transparent ? Colors.background : Colors.primary,
          }}
        />
      </Link>

      <Box component="nav" sx={styles.menu}>
        <Link to="/pricing">
          <Text text="PRICING" style={styles.menuItem} />
        </Link>

        <Link to="/team">
          <Text text="CONTACT" style={styles.menuItem} />
        </Link>

        <Link to="/auth">
          <Button
            style={{ backgroundColor: Colors.background, ml: 3 }}
            hoverColor={Colors.grayLight}
          >
            <Text text="LOGIN" style={styles.btnText} />
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

Header.defaultProps = {
  transparent: true,
  enableBgChange: false,
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
    transition: "all 0.3s ease-in-out",

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
