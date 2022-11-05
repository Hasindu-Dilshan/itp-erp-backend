import express from "express"
import extractJWT from "../middlewares/extractJWT";
import purchase_request_service from "../services/purchase_request_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,purchase_request_service.getPurchaseRequests)
router.get("/:id",extractJWT,purchase_request_service.getPurchaseRequestById)
router.post("/create-purchase-request",purchase_request_service.createPurchaseRequest)
router.put("/update-purchase-request/:id",purchase_request_service.updatePurchaseRequest)
router.delete("/delete-purchase-request/:id",extractJWT,purchase_request_service.deletePurchaseRequest)


export = router