import express from "express"
import extractJWT from "../middlewares/extractJWT";
import purchase_order_service from "../services/purchase_order_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,purchase_order_service.getPurchaseOrders)
router.get("/:id",extractJWT,purchase_order_service.getPurchaseOrderById)
router.post("/create-purchase-order",purchase_order_service.createPurchaseOrder)
router.put("/update-purchase-order/:id",purchase_order_service.updatePurchaseOrder)
router.delete("/delete-purchase-order/:id",extractJWT,purchase_order_service.deletePurchaseOrder)


export = router