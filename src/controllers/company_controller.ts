import express from "express"
import extractJWT from "../middlewares/extractJWT";
import company_service from "../services/company_service";

const router = express.Router();


router.get("/:id",extractJWT,company_service.getRegisteredcompany)
router.post("/",extractJWT,company_service.createRegisteredcompany)
router.put("/:id",extractJWT,company_service.updateRegisteredcompany)
router.delete("/:id",extractJWT,company_service.deleteRegisteredcompany)


export = router