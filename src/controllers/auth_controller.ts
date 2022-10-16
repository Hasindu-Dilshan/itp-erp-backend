"use strict";
import express from "express"
import extractJWT from "../middlewares/extractJWT";
const router = express.Router();
import auth_service from "../services/auth_service";

router.get("/",auth_service.test)
router.get("/validate", extractJWT,auth_service.validateToken);
router.post("/register",auth_service.register);
router.post("/login",auth_service.login);
router.get("/get-all-users",extractJWT, auth_service.getAllUsers);

export = router