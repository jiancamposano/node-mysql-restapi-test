import { Router } from "express";
import {
    getEmployees,
    updateEmployees,
    createEmployees,
    deleteEmployees,
    getEmployee,
    getHome
} from "../controllers/employees.controller.js";

const router = Router();
router.get("/", getHome)
router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);
router.post("/employees", createEmployees);
router.patch("/employees/:id", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;
