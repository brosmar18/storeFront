import { ShopHero, ShopCategories } from "../../sections/Shop";
import "./Shop.scss";

const Shop = () => {
  return (
    <main className="shop">
      <ShopHero />
      <ShopCategories />
    </main>
  );
};

export default Shop;
