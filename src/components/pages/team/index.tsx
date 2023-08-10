import { Box, Divider, SxProps, Theme } from "@mui/material";
import Text from "../../atoms/texts/Text";
import BaseLayout from "../../layouts/BaseLayout";

export default function TeamPage(): React.ReactNode {
  return (
    <BaseLayout pt={80}>
      <Box component="section" sx={styles.container}>
        <Text
          text="Meet the team"
          style={{
            fontFamily: "Lexend Bold",
            fontSize: 40,
            mb: 2,
          }}
        />

        <Text 
          text="Here is the ones who contribute to the development of this nice tool."
          style={{
            fontFamily: "Lato Regular",
            fontSize: 20,
            mb: 3,
          }}
        />

        <Divider />
      </Box>
    </BaseLayout>
  );
}

const styles: Record<string, SxProps<Theme>> = {
  container: (theme) => ({
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 200px)",
    padding: "0px 100px",

    [theme.breakpoints.down("md")]: {
      padding: "0px 50px",
      width: "calc(100% - 100px)",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
      width: "calc(100% - 40px)",
    },
  }),
};
