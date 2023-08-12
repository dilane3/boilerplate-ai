import { Skeleton } from "@mui/material";

type BlockSkeletonProps = {
  width?: number | string;
  height?: number;
  mb?: number;
  animated?: boolean;
};

export default function BlockSkeleton({
  width,
  height,
  animated,
  mb,
}: BlockSkeletonProps) {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      height={height}
      width={width}
      sx={{
        animation: animated ? "wave 5s infinite ease-out" : "none",
        maxWidth: width,
        mb,
        borderRadius: 2,

        // keyframe
        "@keyframes wave": {
          "0%": {
            width: 100,
          },

          "50%": {
            width: "100%",
          },

          "100%": {
            width: "100%",
          },
        },
      }}
    />
  );
}

BlockSkeleton.defaultProps = {
  width: "100%",
  height: 200,
  animated: false,
  mb: 1,
};
