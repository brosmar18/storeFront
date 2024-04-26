import "./ShopProducts.scss";
import { ProductCard } from "../../../components";
import { gameCategories } from "../../../constants";
import { Select, MenuItem } from "@mui/material";

const ShopProducts = () => {
  return (
    <section className="shopProducts">
      {/* HEADER  */}
      <div className="shopProducts__heading">
        <div className="shopProducts__heading-title">
          <p className="subTitle">By Category</p>
          <h2>Our Games</h2>
        </div>
        <div className="shopProducts__categories">
          <Select defaultValue="all" className="category-select">
            <MenuItem value="all">All Categories</MenuItem>
            {gameCategories.map((item) => (
              <MenuItem key={item.category}>{item.category}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
      {/* CARDS  */}
      <div className="shopProducts__cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ShopProducts;
