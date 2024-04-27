import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../../../store/actions/categoryActions";
import { filterProducts } from "../../../store/actions/productActions";
import { addToCart } from "../../../store/actions/cartActions";
import { Select, MenuItem } from "@mui/material";
import { ProductCard } from "../../../components";
import "./ShopProducts.scss";

const ShopProducts = () => {
  const dispatch = useDispatch();
  const { categories, activeCategory } = useSelector(
    (state) => state.categories
  );
  const { filteredProducts } = useSelector((state) => state.products);

  const handleCategoryChange = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(filterProducts(category));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="shopProducts">
      {/* HEADER */}
      <div className="shopProducts__heading">
        <div className="shopProducts__heading-title">
          <p className="subTitle">By Category</p>
          <h2>Our Games</h2>
        </div>
        <div className="shopProducts__categories">
          <Select
            value={activeCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="category-select"
          >
            <MenuItem value="all">Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.category}>
                {category.category}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      {/* CARDS */}
      <div className="shopProducts__cards">
        {filteredProducts.map((product) => (
          <ProductCard
            key={`product-card-${product.title}`}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
