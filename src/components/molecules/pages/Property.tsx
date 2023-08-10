import { SxProps, Theme, Box } from "@mui/material"
import Text from "../../atoms/texts/Text"
import { Colors } from "../../../constants/colors"

type PropertyProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function Property({ title, text, icon }: PropertyProps) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.top}>
        <Box sx={styles.icon}>
          {icon}
        </Box>

        <Text text={title} style={styles.title} />
      </Box>

      <Text text={text} style={styles.text} />
    </Box>
  )
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  top: (theme) => ({
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    mb: 2,

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },

    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    }
  }),

  icon: {
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: Colors.primary,
    mr: 2,
  },

  title: {
    fontFamily: "Lexend Bold",
    fontSize: 24,
    color: Colors.black,
  },

  text: (theme) => ({
    fontFamily: "Lato Regular",
    fontSize: 20,
    color: Colors.black,

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    }
  })
}