import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      {/* Hero Text  */}
      <div className="hero__text">
        <h1>FIFA 23 Release Date Announced</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          maiores. Facere odit alias fugiat nostrum ratione obcaecati impedit ad
          minus, aliquam doloribus quia sequi autem cum temporibus ut quaerat
          reiciendis.
        </p>
      </div>
      {/* Cards  */}
      <div className="hero__cards"></div>
    </section>
  );
};

export default Hero;
