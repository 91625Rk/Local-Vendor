const Hero = () => {
  return (
    <div className="px-10 py-16 flex flex-col gap-6">
      
      <h1 className="text-5xl font-bold leading-tight">
        Find Trusted <br />
        <span className="text-purple-400">Local Vendors Near You ⚡</span>
      </h1>

      <p className="text-gray-400 max-w-xl">
        Discover verified electricians, plumbers, carpenters near your location instantly.
      </p>

      <div className="flex gap-4 mt-4">
        <input
          className="px-4 py-3 w-80 rounded-lg bg-[#1e293b] border border-gray-700"
          placeholder="Search services..."
        />

        <button className="bg-purple-500 px-6 py-3 rounded-lg glow">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;