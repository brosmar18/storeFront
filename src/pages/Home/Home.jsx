import { Hero, Catalog, Popular, Trending } from "../../sections/Home";

const Home = () => {
  return (
    <main>
      <Hero />
      <Trending />
      <Popular />
      <Catalog />
    </main>
  );
};

export default Home;
