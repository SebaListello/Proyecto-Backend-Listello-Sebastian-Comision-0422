import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExp } from "../middlewares/validationResultExp.js";
const router = express.Router();

router.post(
  "/register",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Minimo 6 caracteres")
      .trim()
      .isLength({ min: 6 }),
    body("password", "Formato de password incorrecto")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.repassword) {
          throw new Error("No coinciden las contraseñas");
        }
        return value;
      }),
  ],
  validationResultExp,
  register
);

router.post(
  "/login",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Formato de password incorrecto")
      .trim()
      .isLength({ min: 6 }),
  ],
  validationResultExp,
  login
);

export default router;
