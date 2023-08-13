import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { SxProps, Theme } from "@mui/material";
import { useActions, useSignal } from "@dilane3/gx";
import { ModalState, ModalType } from "../../../gx/signals/modal/types";
import { Colors } from "../../../constants/colors";
import CreateWriting from "./content/CreateWriting";
import Icon from "../../atoms/icons/Icon";
import { CloseSharp } from "@mui/icons-material"

export default function ModalProvider() {
  // Global state
  const { isOpened, type } = useSignal<ModalState>("modal");

  const { close } = useActions("modal");

  // Handlers
  const renderModal = () => {
    switch (type) {
      case ModalType.WRITING_CREATE: {
        return <CreateWriting />;
      }

      default:
        return null;
    }
  };

  return (
    <Modal
      open={isOpened}
      onClose={() => close()}
      aria-labelledby="modal-modal"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box sx={styles.container}>{renderModal()}</Box>

        <Box sx={styles.floatingCloseIcon}>
          <Icon onClick={() => close()}>
            <CloseSharp color="warning" />
          </Icon>
        </Box>
      </>
    </Modal>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 600,
    maxWidth: 800,
    width: "auto",
    height: "auto",
    bgcolor: Colors.background,
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 3,

    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 100px)",
      minWidth: "calc(100% - 100px)",
    }
  }),

  floatingCloseIcon: {
    position: "absolute" as "absolute",
    top: 20,
    right: 20,
    backgroundColor: Colors.background,
    padding: 1,
    borderRadius: 100,
    border: "2px solid rgba(0, 0, 0, 0.1)"
  }
};
