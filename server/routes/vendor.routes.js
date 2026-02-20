import express from 'express';
import{
    registerVendor,
    getnearbyVendor
} from '../controller/vendor.controller';

const router = express.Router();

router.post('/register',registerVendor);
router.get('/nearby',getnearbyVendor);

export default router;