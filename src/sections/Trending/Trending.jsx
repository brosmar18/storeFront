import "./Trending.scss";

const Trending = () => {
  return (
    <section className="trending">
      {/* Heading  */}
      <div className="trending__heading">
        <div className="trending__heading-title">
          <p className="subTitle">Trending</p>
          <div className="title">
            <h2>Trending Now</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
          </div>
        </div>
        <button type="button">View All</button>
      </div>
      {/* Cards  */}
      <div className="trending__cards">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </section>
  );
};

export default Trending;
