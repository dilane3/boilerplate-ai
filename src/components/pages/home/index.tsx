import { Box } from "@mui/material";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";

export default function HomePage(): React.ReactNode {
  return (
    <Box sx={{ m: 4 }}>
      <Button>
        <Text text="Hello World" style={{ fontFamily: "Lexend Bold" }} />
      </Button>
    </Box>
  );
}
