import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { demoProfilePicture } from "./utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle />
          </Typography>
          <Typography variant="h7">
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

ChannelCard.propTypes = {
  marginTop: PropTypes.string.isRequired,
  channelDetail: PropTypes.shape({
    id: PropTypes.shape({
      channelId: PropTypes.string.isRequired,
    }).isRequired,
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        high: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
    }),
    statistics: PropTypes.shape({
      subscriberCount: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default ChannelCard;
