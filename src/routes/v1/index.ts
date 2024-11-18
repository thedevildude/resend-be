import express from 'express';
import sendRoute from './sendemail.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/sendemail',
    route: sendRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;