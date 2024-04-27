import "./CategoryCard.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard">
      <p>{category}</p>
    </div>
  );
};

export default CategoryCard;
