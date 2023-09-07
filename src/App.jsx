import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./style.css";
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Navbar,
} from "./components";

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000", color: "#f0f0f0" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
