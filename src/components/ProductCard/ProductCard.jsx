import { pikachu } from "../../assets/gameCovers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductCard.scss";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="productCard">
      <img src={image} alt={title} />
      <div className="productCard__footer">
        <div className="productCard__info">
          <h3>{title}</h3>
          <div className="price">
            <p>{description}</p>
            <p>{price}</p>
          </div>
        </div>
        <div className="buttons">
          <button type="button">
            <ShoppingCartIcon />
          </button>
          <button type="button">
            <FavoriteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
