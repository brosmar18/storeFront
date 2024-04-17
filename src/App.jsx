import { Navbar } from "./components";
import { Hero } from "./sections";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
