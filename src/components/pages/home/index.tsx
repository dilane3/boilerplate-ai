import { Box } from "@mui/material";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";
import Input from "../../atoms/inputs/Input";

export default function HomePage(): React.ReactNode {
  return (
    <Box sx={{ m: 4 }}>
      <Button>
        <Text text="Hello World" style={{ fontFamily: "Lexend Bold" }} />
      </Button>

      <Input label="Name" helperText="bonus" size="small" width={400} />
    </Box>
  );
}
