  import{useNavigate} from "react-router-dom"

  const VendorCard = ({ vendor }) => {
    const navigate = useNavigate();
    console.log("Vendors clicked", vendor);
    return (
      <div
      
      className="card p-4 w-64 hover:scale-105 transition-all">
        
        <img
          src="https://via.placeholder.com/150"
          className="rounded-lg mb-3"
        />

        <h2 className="text-lg font-semibold">{vendor.name}</h2>
        <p className="text-sm text-gray-400">{vendor.category}</p>

        <div className="flex justify-between mt-3">
          <span className="text-yellow-400">{vendor.rating || 4.5}</span>
          <span className="text-gray-400">{vendor.distance || "2km"}</span>
        </div>

        <button 
        onClick={() => navigate(`/vendor/${vendor._id}`)}
        className="mt-4 w-full bg-purple-500 py-2 rounded-lg">
          View Profile
        </button>
      </div>
      
    );
  };

  export default VendorCard;