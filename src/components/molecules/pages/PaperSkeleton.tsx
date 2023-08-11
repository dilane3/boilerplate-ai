import { Box } from "@mui/material";
import TextSkeleton from "../../atoms/skeletons/TextSkeleton";

export default function PaperSkeleton() {
  return (
    <Box>
      <TextSkeleton width={300} />
      <TextSkeleton width={300} />
      <TextSkeleton width={150} mb={3} />

      <TextSkeleton width={300} />
      <TextSkeleton width={300} />
      <TextSkeleton width={150} mb={5} />

      <TextSkeleton width={700} mb={4} />

      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton width={200} mb={4} />

      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton width={200} mb={4} />

      <TextSkeleton width={200} />
      <TextSkeleton width={150} mb={3} />
    </Box>
  )
}