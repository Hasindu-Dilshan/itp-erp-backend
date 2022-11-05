import express from "express"
import extractJWT from "../middlewares/extractJWT";
import employee_service from "../services/employee_service";

const router = express.Router();

router.get("/:id/:offset/:page",extractJWT,employee_service.getemployees)
router.get("/:id",extractJWT,employee_service.getemployeeById)
router.post("/create-employee",employee_service.createemployee)
router.put("/update-employee/:id",employee_service.updateemployee)
router.delete("/delete-employee/:id",extractJWT,employee_service.deleteemployee )


export = router   