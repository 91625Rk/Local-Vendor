import Vendor from "../models/Vendor.js";

export const verifyVendor = async (req, res)=>{
    try{
        const vendorId = req.params.id;

        const vendor = await Vendor.findByIdAndUpdate(
            vendorId,
            {isVerified: true},
            {new: true}
        );
        if(!vendor){
            return res.status(404).json({message: "Vendor not found"})
        }
        res.json({
            message: "Vendor verified Successfully",
            Vendor
        })
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};