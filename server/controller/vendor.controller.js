import Vendor from "../models/Vendor.js";

//Vendor Register Controller

export const registerVendor = async (req, res) => {
  try {
    const { name, category, phone, latitude, longitude } = req.body;
    if (!name || !category || !phone || !latitude || !longitude) {
      return res.status(400).json({ message: "All fields required" });
    }
    const vendor = await Vendor.create({
      name,
      category,
      phone,
      location: {
        type: "Point",
        coordinates: [Number(longitude), Number(latitude)],
      },
    });
    res.status(201).json({
      message: "Vendor registered, waiting for admin approval",
      vendor,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//Nearby Vendor search

export const getnearbyVendor = async (req, res) => {
  const { lat, lng, category } = req.query;

  const vendors = await Vendor.find({
    isVerified: true,
    category,
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat],
        },
        $maxDistance: 5000,
      },
    },
  });
  res.json(vendors); //
};
export const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find({ isVerified: true });
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
