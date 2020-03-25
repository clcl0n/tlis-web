import { Router } from 'express';
import tokenRouter from './token';
import programRouter from './program';
import adminRouter, { AdminRouter } from './admin';
import heartbeatRouter from './heartbeat';
import uploadsRouter from './uploads';

const apiRouter = Router();

apiRouter.use('/token', tokenRouter);
apiRouter.use('/program', programRouter);
apiRouter.use('/admin', adminRouter);
apiRouter.use('/heartbeat', heartbeatRouter);
apiRouter.use('/uploads', uploadsRouter);

export default apiRouter;
