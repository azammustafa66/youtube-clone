import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./index";
import { fetchData } from "./utils/fetchFromAPI";
import styled from "styled-components";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchData(`search?channelId=${id}&part=snippet&id=${id}&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <StyledDiv />
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
      </Box>
      <Box display={"flex"} p={"2"}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

const StyledDiv = styled.div`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(186, 66, 202, 1) 50%,
    rgba(0, 212, 255, 1) 100%
  );
  z-index: 10;
  height: 300px;
`;

export default ChannelDetail;
