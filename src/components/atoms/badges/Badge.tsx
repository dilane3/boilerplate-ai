import { Box, SxProps, Theme } from "@mui/material";
import Text from "../texts/Text";
import { Colors } from "../../../constants/colors";

type BadgeProps = {
  text: string;
  color: string;
  textColor: string;
};

export default function Badge({ text, color, textColor }: BadgeProps) {
  return (
    <Box component="div" sx={styles.badge} style={{ backgroundColor: color }}>
      <Text
        text={text}
        style={{
          color: textColor,
          fontSize: "1rem",
          fontFamily: "Lato Bold",
        }}
      />
    </Box>
  );
}

Badge.defaultProps = {
  color: Colors.grayLight,
  textColor: Colors.black,
};

const styles: Record<string, SxProps<Theme>> = {
  badge: {
    minWidth: 10,
    minHeight: 10,
    padding: "0.3rem 1rem",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
