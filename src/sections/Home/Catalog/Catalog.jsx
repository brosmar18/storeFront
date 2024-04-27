import { gameCollection } from "../../../assets";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <section className="catalog">
      {/* Image  */}
      <div className="catalog__image">
        <img src={gameCollection} alt="game colection" />
      </div>
      {/* Text  */}
      <div className="catalog__text">
        <div className="catalog__text-container">
          <div className="heading">
            <p className="subTitle">Catalog</p>
            <h2 className="title">Explore Our Catalog</h2>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            leo porta nunc, velit. Dui justo, non platea viverra aliquam
            convallis arcu molestie egestas. Volutpat integer tristique ac nam
            integer. Hac ut nisi, ut amet donec porta.
          </p>
          <button className="button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
