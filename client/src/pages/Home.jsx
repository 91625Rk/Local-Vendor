import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VendorCard from "../components/VendorCard";
import API from "../services/api";
import MapView from "../components/MapView";

const Home = () => {
  const [vendors,setVendors] = useState([]);
  const [userLocation, setUserLocation] = useState([28.7, 77.1]);
  useEffect(()=>{
    const fetchNearbyVendors = async (lat, lng) => {
      try {
        const res = await API.get(
          `/vendors/nearby?lat=${lat}&lng=${lng}`
        );
        setVendors(res.data);
      } catch (error) {
        console.log("Nearby error:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllVendors = async () => {
      try {
        const res = await API.get("/vendors");
        setVendors(res.data);
      } catch (error) {
        console.log("All vendor error:", error);
      } finally {
        setLoading(false);
      }
    };

    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        fetchNearbyVendors(lat, lng);
      },
      () => {
        fetchAllVendors();
      }
    );
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