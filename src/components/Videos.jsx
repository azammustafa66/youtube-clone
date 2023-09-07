import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./index";
import Loader from "./SkeletonUI/Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      flexDirection={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
    >
      {videos.map((video, index) => (
            <Box key={index}>
              {video.id.videoId && <VideoCard video={video} />}
              {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
          ))}
    </Stack>
  );
};

Videos.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  direction: PropTypes.string.isRequired,
};

export default Videos;
