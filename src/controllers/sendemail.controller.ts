import { sendemailService } from "../services";
import catchAsync from "../utils/catchAsync";

const createMessage = catchAsync(async (req, res) => {
  const { sender_email, recipient_email, message, subject } = req.body;

  await sendemailService.createMessage({
    sender_email,
    message,
    recipient_email,
    subject,
  });
  res.status(201).send({ message: "Message queued for your ex!" });
});

export default {
  createMessage,
};