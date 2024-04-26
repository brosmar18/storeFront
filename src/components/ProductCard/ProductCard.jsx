import "./ProductCard.scss";

const ProductCard = ({ title, description, price }) => {
  return (
    <div className="productCard">
      <div className="productCard__image" />
      <div className="productCard__details">
        <h2>Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        </p>
        <div className="productCard__footer">
          <span>59.99</span>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
