import { CategoryCard } from "../../components";
import { gameCategories } from "../../constants";
import "./Categories.scss";

const Categories = () => {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="categories__list">
        {gameCategories.map((item) => (
          <CategoryCard category={item.category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
