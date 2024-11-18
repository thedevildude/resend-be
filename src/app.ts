import express from "express";
import helmet from "helmet";
import cors from "cors";
import httpStatus from "http-status";
import config from "./core/config";
import morgan from "./core/morgan";
import xss from "./middlewares/xss";
import routes from "./routes/v1";
import { errorConverter, errorHandler } from "./middlewares/error";
import ApiError from "./utils/ApiError";
import { sendemailLimiter } from "./middlewares/rateLimiter";

const app = express();

if (config.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// enable cors
app.use(cors());
app.options("*", cors());

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/sendemail', sendemailLimiter);
}


// v1 api routes
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;
