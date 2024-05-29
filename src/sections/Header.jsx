import { Nav } from "../components";

const Header = () => {
  return (
    <header className="bg-primary-darkBlue text-primary-white">
      <Nav />
      <div className="bg-primary-darkPurple text-primary-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Gaming Store</h1>
        <p className="text-xl mb-8">Your one-stop shop for the best games.</p>
        <button className="bg-primary-neonGreen text-primary-darkBlack py-2 px-4 rounded-lg">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;
