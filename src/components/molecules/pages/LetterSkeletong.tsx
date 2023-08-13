import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { SxProps, Theme, Box } from "@mui/material";
import BlockSkeleton from "../../atoms/skeletons/BlockSkeleton";
import TextSkeleton from "../../atoms/skeletons/TextSkeleton";

export default function LetterSkeleton() {
  return (
    <Card sx={styles.container}>
      <BlockSkeleton height={300} />

      <CardContent>
        <TextSkeleton />

        <Box sx={styles.since}>
          <TextSkeleton width={20} />
          <TextSkeleton width={100} ml={2} />
        </Box>
      </CardContent>
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

  since: (theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evently",
    mt: 2,

    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {},
  }),
};
