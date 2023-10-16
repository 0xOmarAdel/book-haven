import Browse from "../components/Browse";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopRated from "../components/TopRated";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TopRated />
      <Browse />
    </>
  );
};

export default Home;
