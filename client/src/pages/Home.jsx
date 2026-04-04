import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VendorCard from "../components/VendorCard";
import API from "../services/api";

const Home = () => {
  const [vendors,setVendors] = useState([]);
  useEffect(()=>{
    const fetchVendors = async () => {
      try {
        const res = await API.get("/vendors");
        console.log("API", res.data);
        setVendors(res.data.vendors || res.data); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchVendors();
  
  },[])
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="px-10 grid grid-cols-4 gap-6">
        {vendors.map((v)=>(
          <VendorCard key={v._id} vendor={v} />
        ))}
      </div>
    </div>
  );
};

export default Home;