import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type : String,
            enum: ['Electrician','Plumber', 'Carpenter', 'AC Repair'],
            required : true
        },
        phone: {
            type: String,
            required : true,
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type:[Number],
                required: true
            }
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        rating: {
            type: Number,
            default: 0
        }
    },
    {timestamps: true}
);

VendorSchema.index({location: '2dsphere'});

export default mongoose.model('Vendor', VendorSchema);