import express from "express"
import extractJWT from "../middlewares/extractJWT";
import customer_service from "../services/customer_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,customer_service.getcustomers)
router.get("/:id",extractJWT,customer_service.getcustomerById)
router.post("/create-customer",customer_service.createcustomer)
router.put("/update-customer/:id",customer_service.updatecustomer)
router.delete("/delete-customer/:id",extractJWT,customer_service.deletecustomer )


export = router   