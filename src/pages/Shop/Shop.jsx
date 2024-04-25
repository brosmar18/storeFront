import { Categories } from "../../sections/Home";
import "./Shop.scss";

const Shop = () => {
  return (
    <main className="shop">
      <section className="shop__hero">
        <h1>Epic Deals on Top Games</h1>
        <button type="button">Shop Now</button>
      </section>
      <Categories />
    </main>
  );
};

export default Shop;
