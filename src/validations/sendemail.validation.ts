import Joi from "joi";

const sendEmail = {
  body: Joi.object().keys({
    sender_email: Joi.string().email().required(),
    recipient_email: Joi.string().email().required(),
    message: Joi.string().required().max(1000),
    subject: Joi.string().optional().max(200),
    duration: Joi.string().optional()
  }),
};

export default {
  sendEmail,
};
