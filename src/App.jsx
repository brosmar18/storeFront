import {
  Categories,
  Deals,
  Footer,
  Games,
  Header,
  Install,
  Popular,
} from "./sections";

const App = () => {
  return (
    <div className="bg-primary-darkBlue min-h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto bg-white">
        <Games />
        <Categories />
        <Popular />
        <Deals />
        <Install />
      </main>
      <Footer />
    </div>
  );
};

export default App;
