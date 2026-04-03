import Navbar from "../components/Navbar";

const VendorDetails = () => {
  return (
    <div>
      <Navbar />

      <div className="p-10 grid grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="card p-6">
          <h1 className="text-2xl font-bold mb-2">Amit Kumar</h1>
          <p className="text-gray-400">Electrician</p>

          <p className="mt-4 text-gray-300">
            10+ years experience in wiring, repair & installation.
          </p>

          <div className="mt-4 flex gap-4">
            <button className="bg-green-500 px-4 py-2 rounded-lg">
              Call
            </button>

            <button className="bg-purple-500 px-4 py-2 rounded-lg">
              Book Service
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="card p-4">
          <img
            src="https://via.placeholder.com/400"
            className="rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default VendorDetails;