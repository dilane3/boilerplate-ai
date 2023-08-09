import { SxProps, Theme, Typography } from "@mui/material";

type TextProps = {
  text: string;
  style: SxProps<Theme>;
};

export default function Text({ text, style }: TextProps) {
  return <Typography sx={style}>{text}</Typography>;
}

Text.defaultProps = {
  style: {},
};
