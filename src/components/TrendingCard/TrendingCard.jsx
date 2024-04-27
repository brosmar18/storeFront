import "./TrendingCard.scss";

const TrendingCard = ({ image, title, prevPrice, price }) => {
  return (
    <div className="trendingCard">
      <img src={image} alt={title} />
      <div className="trendingCard__info">
        <h3>{title}</h3>
        <div className="price">
          <p>${prevPrice}</p>
          <p>${price}</p>
        </div>
        <button type="button">Buy Now</button>
      </div>
    </div>
  );
};

export default TrendingCard;
