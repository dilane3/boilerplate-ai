import { Box, Divider, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import Button from "../../atoms/buttons/Button";
import EditIcon from "@mui/icons-material/Edit";
import LetterCard from "../../molecules/pages/Letter";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useActions, useSignal } from "@dilane3/gx";
import { WritingState } from "../../../gx/signals/writings/types";
import { ModalActions, ModalType } from "../../../gx/signals/modal/types";
import { Colors } from "../../../constants/colors";
import LetterSkeleton from "../../molecules/pages/LetterSkeletong";

export default function DashbordPage(): React.ReactNode {
  // Global state
  const { writings, loading } = useSignal<WritingState>("writings");

  const { open } = useActions<ModalActions>("modal");

  const handleOpen = () => {
    open(ModalType.WRITING_CREATE);
  };

  return (
    <DashboardLayout>
      <Box component="section" sx={styles.container}>
        <Text text="Yours writings" style={styles.title} />
        <Text
          text={`You already have ${writings.length} writing${
            writings.length > 1 ? "s" : ""
          }`}
          style={styles.subtitle}
        />
        <Divider />

        <Box sx={styles.writingsContainer}>
          {loading ? (
            <>
              <LetterSkeleton />
              <LetterSkeleton />
              <LetterSkeleton />
            </>
          ) : (
            writings.map((writing) => (
              <LetterCard key={writing.id} letter={writing} />
            ))
          )}
        </Box>

        <Box sx={styles.floatingBtn}>
          <Button
            style={{ height: 50, px: 3 }}
            disabledShadow={false}
            onClick={handleOpen}
          >
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
    // backgroundColor: "#f5f5f5",

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
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
    },
  }),

  floatingBtn: {
    position: "fixed",
    bottom: 50,
    right: 50,
    p: 1,
  },
};
