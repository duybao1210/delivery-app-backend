import { Router } from 'express';
import { verifyToken } from '../Middleware/ValidateToken';
import * as register from '../Controller/RegisterController';
import * as user from '../Controller/UserController';
import { upLoadsProfile } from '../Lib/Multer';

const router = Router();


router.post('/register-client', upLoadsProfile.single('image'), register.registerClient );
router.post('/register-delivery', upLoadsProfile.single('image') , register.registerDelivery );

router.get('/get-user-by-id', user.getUserById);
router.put('/edit-profile', user.editProfile);
router.get('/get-user-updated', user.getUserUpdated);
router.put('/change-password',  user.changePassword);
router.put('/change-image-profile',  upLoadsProfile.single('image'), user.changeImageProfile );
router.get('/get-addresses', user.getAddressesUser );
router.delete('/delete-street-address/:idAddress', user.deleteStreetAddress );
router.post('/add-new-address', user.addStreetAddress );
router.get('/get-address', user.getAddressOne );
router.put('/update-notification-token', user.updateNotificationToken );
router.get('/get-admins-notification-token', user.getAdminNotificationToken );
router.put('/update-delivery-to-client/:idPerson', user.updateDeliveryToClient );

export default router;