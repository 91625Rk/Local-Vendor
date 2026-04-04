import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

const VendorDetails = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await API.get(`/vendors/${id}`);
        setVendor(res.data);
      } catch (error) {
        console.log(error); 
      }
    };

    fetchVendor();
  }, [id]);
  console.log("Param Id", id);

  if (!vendor) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">{vendor.name}</h1>
      <p className="text-gray-400">{vendor.category}</p>
      <p className="mt-2">📞 {vendor.phone}</p>
      <p className="mt-2">⭐ {vendor.rating}</p>
    </div>
  );
};

export default VendorDetails;