import {
  Hero,
  Catalog,
  Categories,
  Deals,
  Footer,
  NewReleases,
  News,
  Popular,
  Testimonials,
  Trending,
} from "../sections";

const Home = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <Popular />
      <Catalog />
      <Categories />
    </div>
  );
};

export default Home;
