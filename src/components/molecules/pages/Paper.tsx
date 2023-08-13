import { Box, Menu, MenuItem, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../constants/colors";
import PaperSkeleton from "./PaperSkeleton";
import { formatLetter, reformatLetter } from "../../../utils/string";
import { useActions, useOperations, useSignal } from "@dilane3/gx";
import {
  WritingActions,
  WritingOperations,
  WritingState,
} from "../../../gx/signals/writings/types";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import Writing from "../../../entities/writing/Writing";
import TranslateIcon from "@mui/icons-material/Translate";
import Button from "../../atoms/buttons/Button";
import Text from "../../atoms/texts/Text";
import * as React from "react";
import { Languages } from "../../../constants/lang";
import { translate } from "../../../api/ai";

type PaperProps = {
  loading?: boolean;
  text: string;
};

export default function Paper({ loading: baseLoading, text }: PaperProps) {
  const { id: writingId } = useParams();

  const contentEditableRef = React.useRef<HTMLDivElement>(null);

  // Local state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [loading, setLoading] = React.useState(baseLoading);
  const [update, setUpdate] = React.useState(false);

  // Global state
  const { writings } = useSignal<WritingState>("writings");
  const { updateContent, updateWriting } =
    useActions<WritingActions>("writings");
  const { getWritingById } = useOperations<WritingOperations>("writings");

  // Memoized data
  const writing = useMemo(() => {
    if (!writingId) return null;

    const writing = getWritingById(+writingId);

    return writing;
  }, [writingId, JSON.stringify(writings), text]);

  React.useEffect(() => {
    if (writing) {
      setLoading(baseLoading);
    }
  }, [baseLoading]);

  React.useEffect(() => {
    console.log(contentEditableRef);

    if (!writing) return;
    if (!contentEditableRef.current) return;

    const letter = formatLetter(writing.content);

    contentEditableRef.current.innerHTML = letter;
  }, [writing]);

  React.useEffect(() => {
    if (!writing) return;

    const interval = setInterval(async () => {
      if (update) {
        handleUpdateLetter();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [update]);

  React.useEffect(() => {
    if (!contentEditableRef.current) return;

    if (loading) contentEditableRef.current.innerHTML = "";
  }, [loading]);

  // Handlers

  const handleUpdateLetter = () => {
    if (!writing) return;
    if (!contentEditableRef.current) return;

    const letter = reformatLetter(contentEditableRef.current.innerHTML);

    updateContent({ writingId: writing.id, content: letter });
  };

  // Handlers

  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTranslateLetter = async (lang: string) => {
    handleClose();

    if (!writing) return;

    setLoading(true);

    const { success, data } = await translate(writing.content, lang);

    if (success && data) {
      if (data.message && data.message.content) {
        const updatedWriting = new Writing(writing.toJSON());

        updatedWriting.content = data.message.content;

        updateWriting(updatedWriting);
      }
    }

    setLoading(false);
  };

  return (
    <Box sx={styles.container}>
      {writing?.content && (
        <>
          <Box sx={styles.floatingTranslateButton}>
            <Button onClick={handleOpenDropdown}>
              <TranslateIcon />
              <Text
                text="Translate"
                style={{ fontSize: 14, fontFamily: "Lexend Bold", ml: 2 }}
              />
            </Button>
          </Box>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              "& .MuiMenu-paper": {
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                mt: 1.5,
                maxHeight: 230,
                minHeight: 100,
              },
            }}
          >
            {Languages.map((lang) => (
              <MenuItem
                sx={{ width: 150 }}
                onClick={() => handleTranslateLetter(lang)}
              >
                <Text style={styles.menuItemText} text={lang}></Text>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}

      {loading && (
        <Box sx={styles.floatingPaperSkeleton}>
          <PaperSkeleton />
        </Box>
      )}

      <Box
        ref={contentEditableRef}
        contentEditable={true}
        sx={styles.paper}
        id="letter"
        onInput={() => setUpdate(true)}
      >
        {/* <div dangerouslySetInnerHTML={{ __html: text }} /> */}
        {/* {text} */}
      </Box>
    </Box>
  );
}

Paper.defaultProps = {
  loading: false,
};

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    position: "relative",
    width: "calc(100% - 300px)",
    minWidth: "350px",
    minHeight: "700px",
    padding: "100px",
    backgroundColor: Colors.background,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    mx: "auto",
    // overflowY: "auto",

    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 200px)",
      padding: "80px 50px",
    },

    [theme.breakpoints.down(700)]: {
      minWidth: "200px",
      width: "calc(100% - 120px)",
    },
  }),

  paper: {
    width: "100%",
    minHeight: "500px",
    height: "auto",
    outline: "none !important",
    fontFamily: "Lato Regular",
    fontSize: 18,
  },

  floatingTranslateButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },

  floatingPaperSkeleton: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "calc(100% - 180px)",
    height: "700px",
    padding: 10,
    backgroundColor: Colors.background,
  },
};
