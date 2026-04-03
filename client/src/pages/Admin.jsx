import Navbar from "../components/Navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />

      <div className="p-10">

        <h1 className="text-2xl font-bold mb-6">
          Admin Panel
        </h1>

        <div className="card p-6">

          <h2 className="mb-4">Pending Vendors</h2>

          <div className="flex justify-between items-center mb-3">
            <p>Amit Kumar</p>

            <div className="flex gap-2">
              <button className="bg-green-500 px-3 py-1 rounded">
                Approve
              </button>

              <button className="bg-red-500 px-3 py-1 rounded">
                Reject
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;