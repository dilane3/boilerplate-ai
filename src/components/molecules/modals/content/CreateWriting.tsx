import { Box, SxProps, Theme } from "@mui/material";
import Text from "../../../atoms/texts/Text";
import Input from "../../../atoms/inputs/Input";
import Button from "../../../atoms/buttons/Button";
import { Colors } from "../../../../constants/colors";
import { useState } from "react";
import Writing, { WritingType } from "../../../../entities/writing/Writing";
import { useActions, useSignal } from "@dilane3/gx";
import { AuthState } from "../../../../gx/signals/auth/types";
import { writingProvider } from "../../../../api/writings";
import { WritingActions } from "../../../../gx/signals/writings/types";
import { toast } from "react-toastify";
import { ModalActions } from "../../../../gx/signals/modal/types";

export default function CreateWriting() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Global state
  const { user } = useSignal<AuthState>("auth");

  const { addWriting } = useActions<WritingActions>("writings");
  const { close: closeModal } = useActions<ModalActions>("modal");

  // Handlers
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    if (!description || !user) return;

    toast.info("Creation of writing in progress...");

    const payload = {
      description,
      ownerId: user.uid,
      type: WritingType.LETTER,
      config: Writing.getConfig(WritingType.LETTER)
    };

    setLoading(true);

    const { success, data } = await writingProvider.create(payload);

    setLoading(false);

    if (success && data) {
      const writingData = {
        ...data,
        ownerId: user.uid,
        createdAt: new Date(data.created_at),
      }

      const newWriting = new Writing(writingData);

      addWriting(newWriting);

      setDescription("");

      toast.success("Writing created successfully");

      closeModal();
    } else {
      toast.error("An error occured, please try again later");
    }
  };

  return (
    <Box sx={styles.container}>
      <Text text="Want to write ?" style={styles.title} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mt: 5,
        }}
      >
        <Input
          label="Type of writing"
          value="Letter (recommendation, complain, motivation [...])"
          disabled
          style={{ mb: 4 }}
        />

        <Input
          label="Name your writing"
          value={description}
          style={{ mb: 4 }}
          onChange={handleDescriptionChange}
        />

        <Button
          style={{ height: 40, px: 4, ml: "auto" }}
          onClick={handleSubmit}
          disabled={loading || !description}
        >
          <Text text={loading ? "Loading..." : "Create"} />
        </Button>
      </Box>
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: "2.5rem",
    fontFamily: "Lexend Bold",
    color: Colors.black,
  },
};
