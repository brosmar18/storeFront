// Popular.jsx
import { PopularCard } from "../../components";
import { popularCardData } from "../../constants";
import "./Popular.scss";

const Popular = () => {
  return (
    <section className="popular">
      <div className="popular__container">
        {/* Heading */}
        <div className="popular__heading">
          <div className="popular__heading-title">
            <p className="subTitle">Top Games</p>
            <div className="title">
              <h2>Most Popular</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>
          </div>
          <button type="button" className="popular__heading-button">
            View All
          </button>
        </div>
        {/* Cards */}
        <div className="popular__cards">
          {popularCardData.map((item) => (
            <PopularCard
              key={`${item.id} and ${item.title}`}
              image={item.image}
              title={item.title}
              prevPrice={item.prevPrice}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
