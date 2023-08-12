import { Box, Divider, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import EditIcon from "@mui/icons-material/Edit";
import LetterCard from "../../molecules/pages/Letter";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useSignal } from "@dilane3/gx";
import { WritingState } from "../../../gx/signals/writings/types";


export default function DashbordPage(): React.ReactNode {
  // Global state
  const { writings } = useSignal<WritingState>("writings");

  return (
    <DashboardLayout>
      <Box component="section" sx={styles.container}>
        <Text text="Yours writings" style={styles.title} />
        <Text text="You already have 5 writings" style={styles.subtitle} />
        <Divider />

        <Box sx={styles.writingsContainer}>
          {
            writings.map((writing) => (
              <LetterCard
                key={writing.id}
                letter={writing}
              />
            ))
          }
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
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 2,
    // backgroundColor: "red",
    mt: 3,
    mb: 14,

    [theme.breakpoints.down("md")]: {
      justifyContent:"flex-start",
      alignItems: "center",
      flexDirection: "column",
    },
  }),

  floatingBtn: {
    position: "fixed",
    bottom: 50,
    right: 50,
    p: 1
  },
};
