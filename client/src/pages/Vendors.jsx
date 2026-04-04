import { useEffect, useState } from "react";
import API from "../services/api";
import VendorCard from "../components/VendorCard";
import Navbar from "../components/Navbar";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await API.get("/vendors");
        setVendors(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-10 grid grid-cols-4 gap-6">
        {vendors.map((v) => (
          <VendorCard key={v._id} vendor={v} />
        ))}
      </div>
    </div>
  );
};

export default Vendors