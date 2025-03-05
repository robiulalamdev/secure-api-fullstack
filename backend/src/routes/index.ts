import express from 'express';
const router = express.Router();

const moduleRoutes: any = [
  // {
  //   path: '/users',
  //   route: UserRoutes,
  // },
];

moduleRoutes.forEach((route: any) => router.use(route.path, route.route));
export default router;
