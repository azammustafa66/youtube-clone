import { Stack } from "@mui/system";
import styled from "styled-components";
import PropTypes from "prop-types";

import { categories } from "./utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <StyledStack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <StyledButton
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          category={category.name}
          selectedCategory={selectedCategory}
        >
          <span
            className={`${
              (category.name === selectedCategory ? "text-white" : "red",
              "mr-4")
            }`}
          >
            {category.icon}
          </span>
          <span
            className={`${
              category.name === selectedCategory ? "opacity-100" : "opacity-80"
            }`}
          >
            {category.name}
          </span>
        </StyledButton>
      ))}
    </StyledStack>
  );
};

SideBar.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default SideBar;

const StyledStack = styled(Stack)`
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(114, 113, 113);
    border-radius: 10px;
    height: 200px;
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 5px;
  }
`;

const StyledButton = styled.button`
  font-weight: bold;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  outline: none;
  border: none;
  background: ${({ category, selectedCategory }) =>
    category === selectedCategory ? "#fc1503" : "transparent"};
  padding: 7px 15px;
  margin: 10px 0px;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fc1503;
    color: white !important;
  }
`;
