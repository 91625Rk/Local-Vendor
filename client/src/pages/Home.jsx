import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VendorCard from "../components/VendorCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="px-10 grid grid-cols-4 gap-6">
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
      </div>
    </div>
  );
};

export default Home;