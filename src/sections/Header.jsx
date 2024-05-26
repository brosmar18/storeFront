import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary-darkBlue text-primary-white py-4">
      <nav className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-bold">Gaming Store</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Games</a></li>
          <li><a href="#" className="hover:underline">Categories</a></li>
          <li><a href="#" className="hover:underline">Deals</a></li>
          <li><a href="#" className="hover:underline">Install</a></li>
        </ul>
      </nav>
      <div className="bg-primary-darkPurple text-primary-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Gaming Store</h1>
        <p className="text-xl mb-8">Your one-stop shop for the best games.</p>
        <button className="bg-primary-neonGreen text-primary-darkBlack py-2 px-4 rounded-lg">Shop Now</button>
      </div>
    </header>
  );
};

export default Header;