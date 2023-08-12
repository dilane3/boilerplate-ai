import { Box, SxProps, Theme } from "@mui/material";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Colors } from "../../../constants/colors";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Paper from "../../molecules/pages/Paper";
import Configurator from "../../molecules/pages/Configurator";
import Icon from "../../atoms/icons/Icon";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useEffect, useMemo, useState } from "react";
import { generateLetter } from "../../../api/ai";
import { formatLetter } from "../../../utils/string";
import useConvertToPng from "../../../hooks/useConvertToPng";
import { useParams } from "react-router-dom";
import { useActions, useOperations, useSignal } from "@dilane3/gx";
import { WritingActions, WritingOperations, WritingState } from "../../../gx/signals/writings/types";
import Writing from "../../../entities/writing/Writing";

export default function GeneratorPage(): React.ReactNode {
  const { id: writingId } = useParams();

  const [showConfig, setShowConfig] = useState(false);
  const [loading, setLoading] = useState(false);

  // Global state
  const { writings } = useSignal<WritingState>("writings");
  const { getWritingById } = useOperations<WritingOperations>("writings");
  const { updateWriting } = useActions<WritingActions>("writings");

  // Memoized data
  const writing = useMemo(() => {
    if (!writingId) return null;

    return getWritingById(+writingId);
  }, [writingId, JSON.stringify(writings)]);

  // Custom hooks
  const image = useConvertToPng(writing);

  useEffect(() => {
    if (image) {
      localStorage.setItem("image", image);
    }
  }, [image]);

  // Some handlers

  const handleGenerateLetter = async () => {
    if (!writing) return;

    setLoading(true);

    const config = writing.prepareConfiguration();
    const { success, data, error } = await generateLetter(config);

    setLoading(false);

    if (success && data) {
      if (data.message && data.message.content) {
        const updatedWriting = new Writing(writing.toJSON());

        updatedWriting.content = data.message.content;

        console.log({ content: data.message.content, config })

        updateWriting(updatedWriting);
      }
    } else {
      console.log(error);
    }
  };

  if (!writing) return null

  return (
    <DashboardLayout>
      <Box sx={styles.container}>
        <Box sx={styles.board}>
          <Paper loading={loading} text={formatLetter(writing.content)} />

          <Box sx={styles.floatingBtn}>
            <Button
              style={{ height: 50, px: 3 }}
              disabledShadow={false}
              onClick={handleGenerateLetter}
            >
              <AutoAwesomeIcon sx={{ mr: 1 }} />
              <Text text="Generate" style={{ fontFamily: "Lexend Regular" }} />
            </Button>
          </Box>
        </Box>

        <Box sx={styles.config}>
          <Configurator />
        </Box>

        <Box sx={styles.mobileConfig} className={`${showConfig && "show"}`}>
          <Configurator />
        </Box>

        <Box sx={styles.floatingIconMenu} className={`${showConfig && "show"}`}>
          <Icon onClick={() => setShowConfig((prev) => !prev)}>
            <DehazeIcon />
          </Icon>
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
    width: "calc(100% - 300px)",
    minHeight: "calc(100vh - 140px)",
    backgroundColor: Colors.grayLight,
    py: 5,
    transition: "all 0.3s ease-in-out",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }),

  config: (theme) => ({
    position: "fixed",
    top: 60,
    right: 0,
    bottom: 0,
    display: "flex",
    transition: "all 0.3s ease-in-out",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),

  mobileConfig: {
    position: "fixed",
    top: 60,
    right: 0,
    bottom: 0,
    transition: "all 0.3s ease-in-out",
    zIndex: 10,
    transform: "translateX(100%)",

    "&.show": {
      transform: "translateX(0%)",
    },
  },

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
    },
  }),

  floatingIconMenu: (theme) => ({
    position: "fixed",
    top: 70,
    right: 10,
    p: 0.4,
    transition: "all 0.3s ease-in-out",
    borderRadius: "50%",
    backgroundColor: Colors.background,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    display: "none",
    alignItems: "center",
    justifyContent: "center",

    "&.show": {
      transform: "translateX(-250px)",
    },

    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  }),
};
