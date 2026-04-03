const VendorCard = () => {
  return (
    <div className="card p-4 w-64 hover:scale-105 transition-all">
      
      <img
        src="https://via.placeholder.com/150"
        className="rounded-lg mb-3"
      />

      <h2 className="text-lg font-semibold">Amit Kumar</h2>
      <p className="text-sm text-gray-400">Electrician</p>

      <div className="flex justify-between mt-3">
        <span className="text-yellow-400">⭐ 4.8</span>
        <span className="text-gray-400">1.2 km</span>
      </div>

      <button className="mt-4 w-full bg-purple-500 py-2 rounded-lg">
        View Profile
      </button>
    </div>
  );
};

export default VendorCard;