import Vendor from "../models/Vendor";

//Vendor Register Controller

export const registerVendor = async (req,res)=>{
    try{
        const {name, category, phone, latitude, longitude} = req.body;

        const vendor = await Vendor.create({
            name,
            category,
            phone,
            location:{
                type: 'point',
                coordinated :[longitude, latitude]
            }
            
        });
        res.status(201).json({
            message:"Vendor registered, waiting for admin approval",
            Vendor
        });

    }
    catch(error){
        res.status(500).json({
            error: error.message
        })
    }
};

//Nearby Vendor search

export const getnearbyVendor = async (req,res)=>{
    const {lat, lng, category} = req.query;

    const vendors = await Vendor.find({
        isVerified: true,
        category,
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [lng, lat]
                },
                $maxDistance: 5000
            }
        }
    });
    res.json(vendors)  //

};