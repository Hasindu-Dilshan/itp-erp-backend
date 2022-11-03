import express from "express"
import extractJWT from "../middlewares/extractJWT";
import stock_order_service from "../services/stock_order_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,stock_order_service.getStockOrders)
router.get("/:id",extractJWT,stock_order_service.getStockOrderById)
router.post("/",stock_order_service.createStockOrder)
router.put("/:id",stock_order_service.updateStockOrder)
router.delete("/:id",extractJWT,stock_order_service.deleteStockOrder)


export = router