import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { SxProps, Theme, Box, CardActionArea } from "@mui/material";
import Text from "../../atoms/texts/Text";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import Icon from "../../atoms/icons/Icon";
import Button from "../../atoms/buttons/Button";
import { Link } from "react-router-dom";

type MemberProps = {
  member: {
    id: number;
    name: string;
    title: string;
    country: string;
    avatar: string;
    links: {
      github: string;
      twitter: string;
      website?: string;
    };
  };
};

export default function Member({ member }: MemberProps) {
  return (
    <Card sx={styles.container}>
      <CardActionArea disableRipple sx={styles.containerItems}>
        <Box sx={styles.memberRole}>
          <CardMedia
            component="img"
            image={member.avatar}
            alt="Profil"
            sx={styles.memberPicture}
          />

          <CardContent sx={{ padding: "0 0 0 10px" }}>
            <Text text={member.name} style={styles.memberName} />
            <Text text={member.title} style={styles.description} />
            <Text text={`From ${member.country}`} style={styles.description} />
          </CardContent>
        </Box>
        <Box sx={{ width: "100%", my: 2, ...styles.center }}>
          <Link to={member.links.github} target="_blank">
            <Button style={{ height: 50, px: 4 }}>
              <GitHubIcon sx={{ mr: 1 }} />
              <Text text="Follow me" style={{ fontFamily: "Lexend Regular" }} />
            </Button>
          </Link>

          <Box sx={styles.center}>
            <Link to={member.links.twitter} target="_blank">
              <Icon style={{ fontSize: "24px", color: "#000" }}>
                <TwitterIcon />
              </Icon>
            </Link>

            {member.links.website && (
              <Link to={member.links.website} target="_blank">
                <Icon style={{ fontSize: "24px", color: "#000" }}>
                  <LinkIcon sx={{ transform: "rotate(-45deg)" }} />
                </Icon>
              </Link>
            )}
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    width: "50%",
    marginTop: "20px",
    border: "none",
    boxShadow: "none",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      mb: 3,
    },
  }),
  containerItems: {
    display: "flex",
    flexDirection: "column",
    maginBlock: "0",
    padding: "10px",
  },
  memberPicture: (theme) => ({
    maxWidth: 500,
    width: "120px",
    height: "120px",
    borderRadius: "50%",

    [theme.breakpoints.down("sm")]: {},
  }),
  memberName: {
    fontFamily: "Lexend Bold",
    fontSize: 28,
    mb: 1,
  },
  memberRole: {
    display: "flex",
    width: "100%",
  },
  description: {
    color: "#565656",
    fontSize: 18,
    fontFamily: "Lato Regular",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
