import { Router } from 'express';
import programRouter from './programRouter';

const apiRouter = Router();

apiRouter.use('/program', programRouter);

export default apiRouter;
