import {
  InputAdornment,
  SxProps,
  TextField as TextInput,
  Theme,
} from "@mui/material";

type InputProps = {
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  variant?: "outlined" | "filled" | "standard";
  type: string;
  value: string;
  helperText?: string;
  error?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style: SxProps<Theme>;
  size: "small" | "medium";
  icon?: React.ReactNode;
  width: string | number;
  autoFocus?: boolean;
};

export default function Input({
  ref,
  label,
  variant,
  type,
  value,
  onChange,
  style,
  helperText,
  error,
  size,
  icon,
  width,
  autoFocus,
}: InputProps) {
  return (
    <TextInput
      ref={ref}
      label={label}
      type={type}
      variant={variant}
      value={value}
      onChange={onChange}
      sx={style}
      style={inputStyles}
      helperText={helperText}
      error={error}
      size={size}
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">{icon}</InputAdornment>
        ) : undefined,
        style: {
          fontFamily: "Lexend Regular",
          width,
        },
      }}
      autoFocus={autoFocus}
    />
  );
}

const inputStyles = {
  width: "100%",
  borderRadius: "10px",
  fontSize: "16px",
  fontFamily: "Lexend Regular",
};

Input.defaultProps = {
  type: "text",
  variant: "outlined",
  value: "",
  onChange: () => {},
  style: {},
  size: "small",
  width: "100%",
};
