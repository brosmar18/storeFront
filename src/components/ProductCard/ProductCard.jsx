import { pikachu } from "../../assets/gameCovers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="productCard">
      <img src={pikachu} alt="pikachu" />
      <div className="productCard__footer">
        <div className="productCard__info">
          <h3>Title</h3>
          <div className="price">
            <p>
              Embark on an epic journey as Geralt of Rivia, a monster hunter
              known as a Witcher.
            </p>
            <p>$39.99</p>
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
