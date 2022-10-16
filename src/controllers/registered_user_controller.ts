import express from "express"
import extractJWT from "../middlewares/extractJWT"
import registered_user_service from "../services/registered_user_service"

const router = express.Router()

router.get("/:id", extractJWT, registered_user_service.getRegisteredUser)
router.post("/", extractJWT, registered_user_service.createRegisteredUser)
router.put("/:id", extractJWT, registered_user_service.updateRegisteredUser)
router.delete("/:id", extractJWT, registered_user_service.updateRegisteredUser)

export = router