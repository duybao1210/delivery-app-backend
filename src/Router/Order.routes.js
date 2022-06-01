import { Router } from 'express'; 
import * as orders from '../Controller/OrdersController';
import * as client from '../Controller/ClientController';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.post('/add-new-orders', orders.addNewOrders );
router.get('/get-orders-by-status/:statusOrder', orders.getOrdersByStatus );
router.get('/get-details-order-by-id/:idOrderDetails', orders.getDetailsOrderById );
router.put('/update-status-order-dispatched', orders.updateStatusToDispatched );
router.get('/get-all-orders-by-delivery/:statusOrder', orders.getOrdersByDelivery );
router.put('/update-status-order-on-way/:idOrder', orders.updateStatusToOntheWay );
router.put('/update-status-order-delivered/:idOrder', orders.updateStatusToDelivered );

router.get('/get-list-orders-for-client', client.getListOrdersForClient);


export default router;