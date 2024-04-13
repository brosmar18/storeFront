import React, { useState } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { CategoryButton } from "../components";
import { categoryData } from "../constants";

const CategoriesContainer = styled(Box)({
  padding: "32px",
  backgroundColor: "#fff",
});

const CategoryGrid = styled(Grid)({
  marginTop: "24px",
});

const ProductsContainer = styled(Box)({
  marginTop: "32px",
  padding: "24px",
});

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoriesContainer>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Shop By Categories
      </Typography>
      <CategoryGrid container spacing={2}>
        {categoryData.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <CategoryButton
              category={category}
              onCategoryClick={handleCategoryClick}
            />
          </Grid>
        ))}
      </CategoryGrid>
      <Divider sx={{ my: "32px" }} />
      {selectedCategory && (
        <ProductsContainer>
          <Typography variant="h5" component="h3" gutterBottom>
            {selectedCategory.name}
          </Typography>
          <Typography variant="body1">Display Products Here</Typography>
        </ProductsContainer>
      )}
    </CategoriesContainer>
  );
};

export default Categories;
