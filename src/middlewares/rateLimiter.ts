import rateLimit from 'express-rate-limit';

export const sendemailLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true,
  message: 'Bruh! how many exes do you have?'
});