import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { SxProps, Theme, Box, CardActionArea } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AlarmIcon from "@mui/icons-material/Alarm";
import Text from "../../atoms/texts/Text";

import letter from "../../../assets/images/lettre.png";
import Icon from "../../atoms/icons/Icon";
import { useNavigate } from "react-router-dom";
import { toPng } from "html-to-image";
import { useEffect } from "react";
import * as React from "react";
import Writing from "../../../entities/writing/Writing";
import { capitalize } from "../../../utils/string";
import { formatDate } from "../../../utils/date";

type LetterCardProps = {
  letter: Writing;
};

export default function LetterCard({ letter }: LetterCardProps) {
  const navigate = useNavigate();

  return (
    <Card sx={styles.container}>
      <CardActionArea onClick={() => navigate(`/dashboard/writings/${letter.id}`)}>
        <Icon
          style={{
            fontSize: "24px",
            color: "#FFF",
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
        >
          <MoreVertIcon />
        </Icon>
        <CardMedia
          component="img"
          height="300"
          image={letter.image || ""}
          alt="letter"
          sx={styles.image}
        />
        <CardContent>
          <Text text={capitalize(letter.description)} style={styles.title} />
          <Box sx={styles.since}>
            <AlarmIcon sx={{ fontSize: "24px" }} />
            <Text text={formatDate(letter.createdAt)} style={styles.periode} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    maxWidth: 500,
    width: "360px",
    marginTop: "20px",

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

  image: {
    width: "calc(100% - 40px)",
    objectFit: "cover",
    objectPosition: "top",
    p: 2,
  },
};
