import { Router } from 'express';
import * as category from '../Controller/CategoryController';
import { getAllDelivery } from '../Controller/DeliveryController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.post('/add-categories', category.addCategories);
router.get('/get-all-categories', category.getAllCategories );
router.get('/get-all-delivery', getAllDelivery);

export default router;