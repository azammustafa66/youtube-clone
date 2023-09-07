import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "./utils/constants";
import { SearchBar } from "./index";

const Navbar = () => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to={"/"} className="flex items-center">
      <img src={logo} alt="logo" className="h-10" />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
