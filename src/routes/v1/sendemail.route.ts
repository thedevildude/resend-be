import express from "express";
import validate from "../../middlewares/validate";
import { sendEmail } from "../../validations";
import { sendemailController } from "../../controllers";

const router = express.Router();

router.post("/", validate(sendEmail), sendemailController.createMessage);

export default router;
