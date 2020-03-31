import { Router } from 'express';
import tokenRouter from './tokenRoute';
import heartbeatRouter from './heartbeatRouter';

const apiRouter = Router();

apiRouter.use('/token', tokenRouter);
apiRouter.use('/heartbeat', heartbeatRouter);

export default apiRouter;
