import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { SxProps, Theme, Box, CardActionArea, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AlarmIcon from "@mui/icons-material/Alarm";
import Text from "../../atoms/texts/Text";
import Icon from "../../atoms/icons/Icon";
import { useNavigate } from "react-router-dom";
import Writing from "../../../entities/writing/Writing";
import { capitalize } from "../../../utils/string";
import { formatDate } from "../../../utils/date";
import bg from "../../../assets/images/logo.png";
import { Colors } from "../../../constants/colors";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import * as React from "react";
import { writingProvider } from "../../../api/writings";
import { WritingActions } from "../../../gx/signals/writings/types";
import { useActions } from "@dilane3/gx";
import { toast } from "react-toastify";

type LetterCardProps = {
  letter: Writing;
};

export default function LetterCard({ letter }: LetterCardProps) {
  const navigate = useNavigate();

  // Local state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Global state
  const { deleteWriting } = useActions<WritingActions>("writings");

  // Handlers

  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    handleClose();

    toast.info("Deletion of writing in progress...");

    const { success } = await writingProvider.delete({ id: letter.id });

    if (success) {
      deleteWriting(letter.id);

      toast.success("Writing deleted successfully");
    } else {
      toast.error("An error occured, please try again later");
    }
  };

  return (
    <Card sx={styles.container}>
      <CardActionArea>
        <Icon
          style={{
            fontSize: "24px",
            color: Colors.primary,
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
          onClick={handleOpenDropdown}
        >
          <MoreVertIcon />
        </Icon>

        <CardMedia
          component="img"
          height="300"
          image={letter.image || bg}
          alt="letter"
          sx={{
            width: letter.image ? "calc(100% - 30px)" : "100%",
            objectFit: "cover",
            objectPosition: letter.image ? "top" : "center",
            px: letter.image ? 2 : 0,
            border: "1px solid #F5F5F5",
          }}
          onClick={() => navigate(`/dashboard/writings/${letter.id}`)}
        />
        <CardContent
          onClick={() => navigate(`/dashboard/writings/${letter.id}`)}
        >
          <Text text={capitalize(letter.description)} style={styles.title} />
          <Box sx={styles.since}>
            <AlarmIcon sx={{ fontSize: "24px" }} />
            <Text text={formatDate(letter.createdAt)} style={styles.periode} />
          </Box>
        </CardContent>
      </CardActionArea>

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
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <EditOutlined sx={styles.menuItemIcon} color="action" />
          <Text style={styles.menuItemText} text="Update"></Text>
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ width: 150 }}>
          <DeleteOutline sx={styles.menuItemIcon} color="action" />
          <Text style={styles.menuItemText} text="Delete"></Text>
        </MenuItem>
      </Menu>
    </Card>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    maxWidth: 500,
    width: "360px",
    marginTop: "20px",
    // backgroundColor: "#f5f5f5",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }),

  title: (theme) => ({
    fontFamily: "Lexend Bold",
    fontSize: 18,
    color: "#000",

    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {},
  }),
  since: (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evently",
    mt: 2,

    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {},
  }),
  periode: (theme) => ({
    fontFamily: "Lato",
    fontSize: 16,
    color: "#000",
    marginLeft: "15px",

    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {},
  }),

  menuItemIcon: {
    fontSize: "1.5rem",
    mr: 2,
  },

  menuItemText: {
    fontSize: "1rem",
    fontFamily: "Lato Regular",
  },
};
