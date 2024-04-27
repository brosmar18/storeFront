import { CategoryCard } from "../../../components";
import { gameCategories } from "../../../constants";
import "./Categories.scss";

const Categories = () => {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="categories__list">
        {gameCategories.map((item) => (
          <CategoryCard key={item.id} category={item.category} />
        ))}
      </div>
      <button type="button">See All</button>
    </section>
  );
};

export default Categories;
