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
import { useNavigate, useParams } from "react-router-dom";
import { useActions, useOperations, useSignal } from "@dilane3/gx";
import { WritingActions, WritingOperations, WritingState } from "../../../gx/signals/writings/types";
import Writing from "../../../entities/writing/Writing";
import { writingProvider } from "../../../api/writings";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function GeneratorPage(): React.ReactNode {
  const navigate = useNavigate();
  const { id: writingId } = useParams();

  const [showConfig, setShowConfig] = useState(false);
  const [loading, setLoading] = useState(false);
  const [writingLoaded, setWritingLoaded] = useState(false);

  // Global state
  const { writings } = useSignal<WritingState>("writings");
  const { getWritingById } = useOperations<WritingOperations>("writings");
  const { updateWriting, updateImage } = useActions<WritingActions>("writings");

  // Memoized data
  const writing = useMemo(() => {
    if (!writingId) return null;

    const writing = getWritingById(+writingId);

    setWritingLoaded(true);

    return writing
  }, [writingId, JSON.stringify(writings)]);

  // Custom hooks
  const image = useConvertToPng(writing);

  useEffect(() => {
    const update = async () => {
      if (image && writing) {
        updateImage({ writingId: writing.id, image });
  
        const updatedWriting = new Writing(writing.toJSON());
  
        updatedWriting.image = image;

        await handleUpdateWriting(updatedWriting);
      }
    }

    update();
  }, [image]);

  useEffect(() => {
    if (writingLoaded && !writing) {
      navigate("/dashboard/writings")
    }
  }, [writingLoaded, writing])

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

  const handleUpdateWriting = async (writing: Writing) => {
      // Update writing into supabase
      const { error } = await writingProvider.update(writing);

      console.log(error)

      if (error) toast.error("An error occured while updating your writing");
  }

  if (!writing) return null

  return (
    <DashboardLayout>
      <Helmet>
        <title>Generator - Boilerplate</title>
        <meta name="description" content="Generate your writing easily" />
      </Helmet>

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
