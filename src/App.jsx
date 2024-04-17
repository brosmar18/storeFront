import { Navbar } from "./components";
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
} from "./sections";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Trending />
      <Popular />
      <Catalog />
      <Categories />
      <Deals />
      <NewReleases />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
};

export default App;
