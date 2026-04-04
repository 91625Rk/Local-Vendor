import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="p-10">

        <h1 className="text-2xl font-bold mb-6">
          Welcome, Vendor 👋
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="card p-6">
            <h2>Total Bookings</h2>
            <p className="text-3xl mt-2">24</p>
          </div>

          <div className="card p-6">
            <h2>Rating</h2>
            <p className="text-3xl mt-2">4.8 ⭐</p>
          </div>

          <div className="card p-6">
            <h2>Earnings</h2>
            <p className="text-3xl mt-2">₹12,500</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;