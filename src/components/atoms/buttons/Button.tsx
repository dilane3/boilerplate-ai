import { Button as BaseButton, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../constants/colors";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outlined" | "contained" | "text";
  onClick: () => void;
  style: SxProps<Theme> | ((theme: Theme) => SxProps<Theme>);
  disabled?: boolean;
};

export default function Button({
  children,
  variant,
  onClick,
  style,
  disabled,
}: ButtonProps) {

  const getStyles = () => {
    if (style) {
      if (style instanceof Function) {
        return style;
      }

      return style;
    }
  }
  
  return (
    <BaseButton
      style={{
        fontSize: "16px",
        fontFamily: "OutfitBold",
      }}
      sx={{
        // width: "100%",
        height: "50px",
        borderRadius: "100px",
        outline: "none !important",
        backgroundColor:
          variant === "contained" ? Colors.primary : Colors.background,
          ...getStyles(),

        "&:hover": {
          backgroundColor: variant === "contained" ? Colors.secondary : Colors.grayLight,
        } 
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
};
