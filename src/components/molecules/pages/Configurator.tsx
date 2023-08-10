import { Box, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import Input from "../../atoms/inputs/Input";
import { Colors } from "../../../constants/colors";

export default function Configurator() {
  return (
    <Box sx={styles.config}>
      <Box sx={styles.configItem}>
        <Text text="Sender's Information" style={styles.configTitle} />

        <Input label="Name" style={{ mb: 2 }} />
        <Input label="Adress" />
      </Box>

      <Box sx={styles.configItem}>
        <Text text="Receiver's Information" style={styles.configTitle} />

        <Input label="Name" style={{ mb: 2 }} />
        <Input label="Adress" />
      </Box>

      <Box sx={styles.configItem}>
        <Text text="Letter's Information" style={styles.configTitle} />

        <Input label="Object" style={{ mb: 2 }} />
        <Input label="Main idea" />
      </Box>

      <Box sx={styles.configItem}>
        <Text text="Other Information" style={styles.configTitle} />

        <Input label="Add contraints" />
      </Box>
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  config: {
    display: "flex",
    flexDirection: "column",
    width: 200,
    height: "calc(100vh - 60px)",
    backgroundColor: Colors.background,
    borderLeft: "1px solid #E5E5E5",
    px: 2,
    overflowY: "auto",
    transition: "all 0.3s ease-in-out",
  },

  configItem: {
    display: "flex",
    flexDirection: "column",
    mb: 3,
    pt: 2
  },

  configTitle: {
    fontFamily: "Lexend Bold",
    fontSize: 16,
    mb: 2
  }
};