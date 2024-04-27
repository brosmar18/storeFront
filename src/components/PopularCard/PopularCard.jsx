// PopularCard.jsx
import "./PopularCard.scss";

const PopularCard = ({ image, title, prevPrice, price }) => {
  return (
    <div className="popularCard">
      <div className="card-container">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-pricing">
            <p className="prevPrice">${prevPrice}</p>
            <p className="price">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
