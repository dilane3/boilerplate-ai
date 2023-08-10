import { Box, Divider, SxProps, Theme } from "@mui/material";
import DashboardLayout from "../../layouts/DashboardLayout";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import EditIcon from "@mui/icons-material/Edit";

export default function DashbordPage(): React.ReactNode {
  return (
    <DashboardLayout>
      <Box component="section" sx={styles.container}>
        <Text text="Yours writings" style={styles.title} />
        <Text text="You already have 5 writings" style={styles.subtitle} />
        <Divider />

        <Box sx={styles.writingsContainer}>{/* Letters item here */}</Box>

        <Box sx={styles.floatingBtn}>
          <Button style={{ height: 50, px: 3 }} disabledShadow={false}>
            <EditIcon sx={{ mr: 1 }} />
            <Text text="New Writing" style={{ fontFamily: "Lexend Regular" }} />
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 200px)",
    padding: "0px 100px",

    [theme.breakpoints.down("md")]: {
      padding: "0px 50px",
      width: "calc(100% - 100px)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
      width: "calc(100% - 40px)",
    },
  }),

  title: {
    fontFamily: "Lexend Bold",
    fontSize: 40,
    mb: 2,
  },

  subtitle: {
    fontFamily: "Lato Regular",
    fontSize: 20,
    mb: 3,
  },

  writingsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "auto",
    backgroundColor: "red",
    mt: 3,
  },

  floatingBtn: {
    position: "fixed",
    bottom: 50,
    right: 50,
    p: 1
  },
};
