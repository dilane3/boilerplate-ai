import {
  Avatar,
  Box,
  Divider,
  Menu,
  MenuItem,
  SxProps,
  Theme,
} from "@mui/material";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import { Colors, primaryRGBA } from "../../../constants/colors";
import { Link, useNavigate } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import { useMemo } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import { useActions, useSignal } from "@dilane3/gx";
import { AuthActions, AuthState } from "../../../gx/signals/auth/types";
import { capitalize, truncate } from "../../../utils/string";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import * as React from "react";
import { authProvider } from "../../../api/auth";

type HeaderProps = {
  transparent: boolean;
  type: "default" | "dashboard";
};

export default function Header({
  transparent,
  type,
}: HeaderProps): React.ReactNode {
  const navigate = useNavigate();

  const scrollableContainer = document.querySelector("body");
  const scrollDistance = useScroll(scrollableContainer);

  // Local state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Global state
  const { user } = useSignal<AuthState>("auth");

  const { logout } = useActions<AuthActions>("auth");

  const { transparentDegree } = useMemo(() => {
    const max = window.innerHeight - 80;
    const degree = scrollDistance / max;

    const isScrolled = scrollDistance > max;
    const scrollDegree = degree > 1 ? 1 : degree;

    return { isScrolled, transparentDegree: scrollDegree };
  }, [scrollDistance]);

  // Handlers

  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await authProvider.logout();

    logout();

    handleClose();

    navigate("/auth");
  };

  return (
    <Box
      sx={styles.container}
      style={{
        backgroundColor: transparent
          ? type === "dashboard"
            ? Colors.background
            : primaryRGBA(transparentDegree)
          : Colors.primary,
        borderBottom: type === "dashboard" ? "1px solid #E5E5E5" : "none",
      }}
    >
      <Link to="/">
        <Text
          text="Boilerplate"
          style={{
            fontFamily: "Lexend Black",
            fontSize: 25,
            color: transparent
              ? type === "dashboard"
                ? Colors.primary
                : Colors.background
              : Colors.background,
          }}
        />
      </Link>

      {type === "default" ? (
        <Box component="nav" sx={styles.menu}>
          <Link to="/pricing">
            <Text text="PRICING" style={styles.menuItem} />
          </Link>

          <Link to="/team">
            <Text text="CONTACT" style={styles.menuItem} />
          </Link>

          {!user ? (
            <Link to="/auth">
              <Button
                style={{ backgroundColor: Colors.background, ml: 3 }}
                hoverColor={Colors.grayLight}
              >
                <Text text="LOGIN" style={styles.btnText} />
              </Button>
            </Link>
          ) : (
            <Link to="/dashboard/writings">
              <Button
                style={{ backgroundColor: Colors.background, ml: 3 }}
                hoverColor={Colors.grayLight}
              >
                <Text text="Dashboard" style={styles.btnText} />
              </Button>
            </Link>
          )}
        </Box>
      ) : (
        user && (
          <Box component="nav" sx={styles.menu}>
            <Button style={{ ml: 3, mr: 3 }}>
              <GetAppIcon sx={{ color: Colors.background, mr: 1 }} />

              <Text text="Export" style={styles.btnText2} />
            </Button>

            <Avatar
              sx={{ bgcolor: user.color, cursor: "pointer" }}
              alt={user.username}
              src={user.avatar}
              onClick={handleOpenDropdown}
            />
            <Text
              text={capitalize(truncate(user.email, 7))}
              style={styles.senderName}
            />

            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                "& .MuiMenu-paper": {
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  mt: 1.5,
                },
              }}
            >
              <MenuItem onClick={handleClose} sx={{ width: 150 }}>
                <PersonOutlineOutlinedIcon
                  sx={styles.menuItemIcon}
                  color="action"
                />
                <Text style={styles.menuItemText} text="Profile"></Text>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <LogoutIcon sx={styles.menuItemIcon} color="action" />
                <Text style={styles.menuItemText} text="Logout"></Text>
              </MenuItem>
            </Menu>
          </Box>
        )
      )}
    </Box>
  );
}

Header.defaultProps = {
  transparent: true,
  type: "default",
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
      "& > a:not(:has(button))": {
        display: "none",
      },
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

  btnText2: {
    color: Colors.background,
    fontFamily: "Lexend Regular",
    fontSize: 15,
  },
  senderName: {
    fontFamily: "Lato Bold",
    paddingLeft: "10px",
    fontSize: 16,
  },

  menuItemIcon: {
    fontSize: "1.5rem",
    mr: 2,
  },

  menuItemText: {
    fontSize: "1rem",
    fontFamily: "Lato Regular",
  },
};
