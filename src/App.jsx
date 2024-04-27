import { Navbar, Footer } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Shop } from "./pages";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
