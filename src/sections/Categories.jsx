import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { CategoryButton, ProductCard } from "../components";
import { setActiveCategory } from "../store/features/categoriesSlice";

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
  const dispatch = useDispatch();
  const { activeCategory, list: categories } = useSelector(
    (state) => state.categories
  );
  const products = useSelector((state) => state.products);

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
  };

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory.id)
    : [];

  return (
    <CategoriesContainer>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Shop By Categories
      </Typography>
      <CategoryGrid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <CategoryButton
              category={category}
              onCategoryClick={handleCategoryClick}
            />
          </Grid>
        ))}
      </CategoryGrid>
      <Divider sx={{ my: "32px" }} />
      {activeCategory && (
        <ProductsContainer>
          <Typography variant="h5" component="h3" gutterBottom>
            {activeCategory.name}
          </Typography>
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </ProductsContainer>
      )}
    </CategoriesContainer>
  );
};

export default Categories;
