import { Box } from "@mui/material";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";
import Input from "../../atoms/inputs/Input";
import Icon from "../../atoms/icons/Icon";
import Badge from "../../atoms/badges/Badge";
import BaseLayout from "../../layouts/BaseLayout";

export default function HomePage(): React.ReactNode {
  return (
    <BaseLayout>
      <Box>
        <Text
          text="Welcome back"
          style={{ fontFamily: "Lexend Black", fontSize: 40 }}
        />

        <Button style={{ height: 40 }}>
          <Text text="Hello World" style={{ fontFamily: "Lexend Regular" }} />
        </Button>

        <Input
          style={{ mt: 2 }}
          label="Name"
          helperText="bonus"
          size="small"
          width={400}
        />

        <Icon>
          <Text text="B" />
        </Icon>

        <Badge text="23" />
      </Box>
    </BaseLayout>
  );
}
