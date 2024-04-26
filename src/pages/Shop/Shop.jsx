import { ShopHero, ShopProducts } from "../../sections/Shop";
import "./Shop.scss";

const Shop = () => {
  return (
    <main className="shop">
      <ShopHero />
      <ShopProducts />
    </main>
  );
};

export default Shop;
