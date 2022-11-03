import express from "express"
import extractJWT from "../middlewares/extractJWT";
import item_service from "../services/item_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,item_service.getitems)
router.get("/:id",extractJWT,item_service.getitemById)
router.post("/",item_service.createitem)
router.put("/:id",item_service.updateitem)
router.delete("/:id",extractJWT,item_service.deleteitem)


export = router