import { Router } from 'express';

import * as product from '../Controller/ProductController';
import { upLoadsProducts } from '../Lib/Multer';
import { verifyToken } from '../Middleware/ValidateToken';

const router = Router();


router.post('/add-new-products', upLoadsProducts.array('image') , product.addNewProduct);
router.get('/get-products-top-home', product.getProductsTopHome);
router.get('/get-images-products/:id', product.getImagesProducts );
router.get('/search-product-for-name/:nameProduct', product.searchProductForName );
router.get('/search-product-for-category/:idCategory', product.searchProductsForCategory );
router.get('/list-porducts-admin', product.listProductsAdmin );
router.put('/update-status-product', product.updateStatusProduct);
router.delete('/delete-product/:idProduct', product.deleteProduct);


export default router;