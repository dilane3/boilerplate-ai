import React from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../constants/colors";

type IconProps = {
  children: React.ReactNode;
  onClick: (event?: any) => void;
  className: string;
  style: React.CSSProperties;
};

export default function Icon({
  children,
  onClick,
  className,
  style,
}: IconProps) {
  return (
    <Box sx={styles.icon} style={style} className={className} onClick={onClick}>
      {children}
    </Box>
  );
}

Icon.defaultProps = {
  onClick: () => {},
  className: "",
  style: {},
};

const styles: Record<string, SxProps<Theme>> = {
  icon: (theme) => ({
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    padding: 0.5,

    "&:hover": {
      backgroundColor: Colors.grayLight,
    },
  }),
};
