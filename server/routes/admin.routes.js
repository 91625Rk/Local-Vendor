import express from 'express';
import {verifyVendor} from "../controller/admin.controller.js"

const router = express.Router();

router.patch('/verify/:id',verifyVendor); //vendor approve

export default router;