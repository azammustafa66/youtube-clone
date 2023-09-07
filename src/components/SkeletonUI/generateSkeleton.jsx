import { Box, Skeleton } from "@mui/material";

export const generateSkeletons = (count) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <Box key={`skeleton-${i}`} sx={{ bgColor: "gray.900" }}>
        <Skeleton variant="rectangular" width={350} height={200} />
      </Box>
    );
  }
  return skeletons;
};
