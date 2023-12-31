import { Skeleton } from "@mui/material";

type TextSkeletonProps = {
  width?: number | string;
  mb?: number
  ml?: number
};

export default function TextSkeleton({ width, mb, ml }: TextSkeletonProps) {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      height={15}
      width={width}
      sx={{
        animation: "wave 5s infinite ease-out",
        maxWidth: width,
        mb,
        ml,
        borderRadius: 2,

        // keyframe
        "@keyframes wave": {
          "0%": {
            width: 20,
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

TextSkeleton.defaultProps = {
  width: "100%",
  mb: 1,
  ml: 0
};
