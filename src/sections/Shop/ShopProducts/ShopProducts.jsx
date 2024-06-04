import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveCategory,
  setCategories,
} from "../../../store/categoryReducer";
import { setProducts, filterProducts } from "../../../store/productReducer";
import { addToCart } from "../../../store/cartReducer";
import { Select, MenuItem } from "@mui/material";
import { ProductCard } from "../../../components";
import "./ShopProducts.scss";

const ShopProducts = () => {
  const dispatch = useDispatch();
  const { categories, activeCategory } = useSelector(
    (state) => state.categories
  );
  const { filteredProducts } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      dispatch(setCategories(["all", ...data]));
    };

    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(filterProducts(activeCategory));
    };

    fetchCategories();
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterProducts(activeCategory));
  }, [activeCategory, dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(setActiveCategory(category));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="shopProducts">
      <div className="shopProducts__heading">
        <div className="shopProducts__heading-title">
          <p className="subTitle">By Category</p>
          <h2>Our Products</h2>
        </div>
        <div className="shopProducts__categories">
          <Select
            value={activeCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="category-select"
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <div className="shopProducts__cards">
        {filteredProducts.map((product) => (
          <ProductCard
            key={`product-card-${product.id}`}
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
