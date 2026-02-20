import express from 'express';
import cors from 'cors';
import connectDB from './config/db,js';
import vendorRoutes from './routes/vendor.routes,js'
import adminRoutes from './routes/admin.routes'

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/vendors',vendorRoutes);

app.use('/api/admin', adminRoutes);


export default app;
