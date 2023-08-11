import { Box, Divider, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import EditIcon from "@mui/icons-material/Edit";
import LetterCard from "../../molecules/pages/Letter";
import DashboardLayout from "../../layouts/DashboardLayout";


export default function DashbordPage(): React.ReactNode {
  return (
    <DashboardLayout>
      <Box component="section" sx={styles.container}>
        <Text text="Yours writings" style={styles.title} />
        <Text text="You already have 5 writings" style={styles.subtitle} />
        <Divider />

        <Box sx={styles.writingsContainer}>
          <LetterCard/>
          <LetterCard/>
          <LetterCard/>
        </Box>

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
    my: 2,
  },

  subtitle: {
    fontFamily: "Lato Regular",
    fontSize: 20,
    mb: 3,
  },

  writingsContainer: (theme) => ({
    display: "flex",
    justifyContent:"space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "auto",
    // backgroundColor: "red",
    mt: 3,
    mb: 14,

    [theme.breakpoints.down("lg")]: {
      justifyContent:"space-between",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent:"center",
    },
  }),

  floatingBtn: {
    position: "fixed",
    bottom: 50,
    right: 50,
    p: 1
  },
};
