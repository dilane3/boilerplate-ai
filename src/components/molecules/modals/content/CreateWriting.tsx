import { Box, SxProps, Theme } from "@mui/material";
import Text from "../../../atoms/texts/Text";
import Input from "../../../atoms/inputs/Input";
import Button from "../../../atoms/buttons/Button";
import { Colors } from "../../../../constants/colors";
import { useState } from "react";
import Writing, { WritingType } from "../../../../entities/writing/Writing";
import { useSignal } from "@dilane3/gx";
import { AuthState } from "../../../../gx/signals/auth/types";
import { writingProvider } from "../../../../api/writings";

export default function CreateWriting() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Global state
  const { user } = useSignal<AuthState>("auth");

  // Handlers
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    if (!description || !user) return;

    const payload = {
      description,
      ownerId: user.uid,
      type: WritingType.LETTER,
      config: Writing.getConfig(WritingType.LETTER)
    };

    setLoading(true);

    const { success, data, error } = await writingProvider.create(payload);

    setLoading(false);

    console.log({ data, error });

    if (success && data) {
      // const writingData = {
      //   ...data,
      //   ownerId: user.uid,
      //   createdAt: new Date(data.created_at),

      // }

      setDescription("");
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
