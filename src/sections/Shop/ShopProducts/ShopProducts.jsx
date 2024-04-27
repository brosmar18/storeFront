import "./ShopProducts.scss";
import { ProductCard } from "../../../components";
import { gameCategories, productCardData } from "../../../constants";
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
            <MenuItem value="all">Categories</MenuItem>
            {gameCategories.map((item) => (
              <MenuItem key={item.category}>{item.category}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
      {/* CARDS  */}
      <div className="shopProducts__cards">
        {productCardData.map((item) => (
          <ProductCard
            key={`product-card-${item.title}`}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
