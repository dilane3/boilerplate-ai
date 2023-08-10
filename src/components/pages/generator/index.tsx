import { Box, SxProps, Theme } from "@mui/material";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Colors } from "../../../constants/colors";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Input from "../../atoms/inputs/Input";
import Paper from "../../molecules/pages/Paper";

export default function GeneratorPage(): React.ReactNode {
  return (
    <DashboardLayout>
      <Box sx={styles.container}>
        <Box sx={styles.board}>
          <Paper />

          <Box sx={styles.floatingBtn}>
            <Button style={{ height: 50, px: 3 }} disabledShadow={false}>
              <AutoAwesomeIcon sx={{ mr: 1 }} />
              <Text
                text="Generate"
                style={{ fontFamily: "Lexend Regular" }}
              />
            </Button>
          </Box>
        </Box>

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
      </Box>
    </DashboardLayout>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
  },

  board: (theme) => ({
    position: "relative",
    display: "flex",
    width: "calc(100% - 260px)",
    height: "calc(100vh - 140px)",
    backgroundColor: Colors.grayLight,
    overflowY: "auto",
    py: 5,
    transition: "all 0.3s ease-in-out",

    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  }),

  config: (theme) => ({
    display: "flex",
    flexDirection: "column",
    width: 260,
    height: "calc(100vh - 60px)",
    backgroundColor: Colors.background,
    borderLeft: "1px solid #E5E5E5",
    px: 2,
    overflowY: "auto",
    transition: "all 0.3s ease-in-out",

    [theme.breakpoints.down("md")]: {
      display: "none",
    }
  }),

  floatingBtn: (theme) => ({
    position: "fixed",
    bottom: 50,
    right: 350,
    p: 1,
    transition: "all 0.3s ease-in-out",

    [theme.breakpoints.down("md")]: {
      right: 50,
    },

    [theme.breakpoints.down("sm")]: {
      right: 20,
      bottom: 20,
    }
  }),

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
