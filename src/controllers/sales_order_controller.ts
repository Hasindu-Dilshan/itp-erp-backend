import express from "express"
import extractJWT from "../middlewares/extractJWT";
import sales_order_service from "../services/sales_order_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,sales_order_service.getSalesOrders)
router.get("/:id",extractJWT,sales_order_service.getSalesOrderById)
router.post("/create-sales-order",extractJWT,sales_order_service.createSalesOrder)
router.put("/update-sales-order/:id",extractJWT,sales_order_service.updateSalesOrder)
router.delete("/delete-sales-order/:id",extractJWT,sales_order_service.deleteSalesOrder)


export = router