import express from 'express';
import{
    registerVendor,
    getnearbyVendor,
    getAllVendors,
    getVendorById,
} from '../controller/vendor.controller.js';

const router = express.Router();

router.get('/', getAllVendors);
router.post('/register',registerVendor);
router.get('/nearby',getnearbyVendor);
router.get("/:id", getVendorById);



export default router;