import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  width: "100%",
  padding: "16px",
  borderRadius: "4px",
  backgroundColor: "#f5f5f5",
  color: "#1a1a1a",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
  "& .MuiTypography-root": {
    textTransform: "none",
    fontWeight: "bold",
  },
});

const CategoryButton = ({ category, onCategoryClick }) => {
  return (
    <StyledButton onClick={() => onCategoryClick(category)}>
      <Typography>{category.name}</Typography>
    </StyledButton>
  );
};

export default CategoryButton;
