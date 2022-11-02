import express from "express"
import extractJWT from "../middlewares/extractJWT";
import delivery_order_service from "../services/delivery_order_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,delivery_order_service.getDeliveryOrders)
router.get("/:id",extractJWT,delivery_order_service.getDeliveryOrderById)
router.post("/create-delivery-order",delivery_order_service.createDeliveryOrder)
router.put("/update-delivery-order/:id",extractJWT,delivery_order_service.updateDeliveryOrder)
router.delete("/delete-delivery-order/:id",extractJWT,delivery_order_service.deleteDeliveryOrder)


export = router   