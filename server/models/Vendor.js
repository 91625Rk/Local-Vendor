import mongoose from "mongoose";

const Vendorschema = new mongoose.schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type : String,
            enum: ['Electrician','Plumber', 'Carpenter', 'AC Repaire'],
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
    {timestamp: true}
);

Vendorschema.index({location: '2dsphere'});

export default mongoose.model('vendor', VendorSchema);