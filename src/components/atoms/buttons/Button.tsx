import { Button as BaseButton, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../constants/colors";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outlined" | "contained" | "text";
  onClick: () => void;
  style: SxProps<Theme> | ((theme: Theme) => SxProps<Theme>);
  disabled?: boolean;
  hoverColor?: string;
  disabledShadow?: boolean;
};

export default function Button({
  children,
  variant,
  onClick,
  style,
  disabled,
  hoverColor,
  disabledShadow,
}: ButtonProps) {
  const getStyles = () => {
    if (style) {
      if (style instanceof Function) {
        return style;
      }

      return style;
    }
  };

  return (
    <BaseButton
      style={{
        fontSize: "16px",
        fontFamily: "Lexend Bold",
      }}
      sx={{
        borderRadius: "100px",
        outline: "none !important",
        backgroundColor:
          variant === "contained" ? Colors.primary : Colors.background,
        ...getStyles(),
        boxShadow: disabledShadow ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.25)",

        "&:hover": {
          backgroundColor:
            variant === "contained" ? hoverColor : Colors.grayLight,
          boxShadow: disabledShadow
            ? "none"
            : "0px 2px 4px rgba(0, 0, 0, 0.25)",
        },
      }}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </BaseButton>
  );
}

Button.defaultProps = {
  variant: "contained",
  onClick: () => {},
  style: {},
  hoverColor: Colors.secondary,
  disabledShadow: true,
};
