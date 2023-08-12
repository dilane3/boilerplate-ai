import { Box, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import Input from "../../atoms/inputs/Input";
import { Colors } from "../../../constants/colors";
import { useParams } from "react-router-dom";
import { useActions, useOperations } from "@dilane3/gx";
import { WritingActions, WritingOperations } from "../../../gx/signals/writings/types";
import { useMemo } from "react";
import Writing from "../../../entities/writing/Writing";

export default function Configurator() {
  const { id: writingId } = useParams();

  // Global state
  const { getWritingById } = useOperations<WritingOperations>("writings");
  const { updateWriting } = useActions<WritingActions>("writings");

  // Memoized data
  const writing = useMemo(() => {
    if (!writingId) return null;

    return getWritingById(+writingId);
  }, [writingId]);

  // Handlers
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: string
  ) => {
    if (!writing) return;

    const { value } = e.target;
    let config = writing.config;

    switch (target) {
      case "senderName":
        config.sender.name = value;
        break;
      case "senderAddress":
        config.sender.address = value;
        break;
      case "receiverName":
        config.receiver.name = value;
        break;
      case "receiverAddress":
        config.receiver.address = value;
        break;
      case "object":
        config.letter.object = value;
        break;
      case "mainIdea":
        config.letter.content = value;
        break;
      case "constraints":
        config.other.value = value;
        break;
    }

    // Update writing
    const updatedWriting = new Writing(writing.toJSON());

    updatedWriting.config = config;

    updateWriting(updatedWriting);
  };

  if (!writing) return null;

  return (
    <Box sx={styles.config}>
      <Box sx={styles.configItem}>
        <Text text="Sender's Information" style={styles.configTitle} />

        <Input
          label="Name"
          style={{ mb: 2 }}
          value={writing.config.sender.name}
          onChange={(e) => handleChanges(e, "senderName")}
        />
        <Input
          label="Adress"
          value={writing.config.sender.address}
          onChange={(e) => handleChanges(e, "senderAddress")}
        />
      </Box>

      <Box sx={styles.configItem}>
        <Text text="Receiver's Information" style={styles.configTitle} />

        <Input
          label="Name"
          style={{ mb: 2 }}
          value={writing.config.receiver.name}
          onChange={(e) => handleChanges(e, "receiverName")}
        />
        <Input
          label="Adress"
          value={writing.config.receiver.address}
          onChange={(e) => handleChanges(e, "receiverAddress")}
        />
      </Box>

      <Box sx={styles.configItem}>
        <Text text="Letter's Information" style={styles.configTitle} />

        <Input
          label="Object"
          style={{ mb: 2 }}
          value={writing.config.letter.object}
          onChange={(e) => handleChanges(e, "object")}
        />
        <Input
          label="Main idea"
          value={writing.config.letter.content}
          onChange={(e) => handleChanges(e, "mainIdea")}
        />
      </Box>

      <Box sx={styles.configItem}>
        <Text text="Other Information" style={styles.configTitle} />

        <Input
          label="Add contraints"
          value={writing.config.other.value}
          onChange={(e) => handleChanges(e, "constraints")}
        />
      </Box>
    </Box>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  config: (theme) => ({
    display: "flex",
    flexDirection: "column",
    width: 300,
    height: "calc(100vh - 60px)",
    backgroundColor: Colors.background,
    borderLeft: "1px solid #E5E5E5",
    px: 2,
    overflowY: "auto",
    transition: "all 0.3s ease-in-out",

    [theme.breakpoints.down("md")]: {
      width: 220,
    },
  }),

  configItem: {
    display: "flex",
    flexDirection: "column",
    mb: 3,
    pt: 2,
  },

  configTitle: {
    fontFamily: "Lexend Bold",
    fontSize: 16,
    mb: 2,
  },
};
