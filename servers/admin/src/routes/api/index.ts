import { Router } from 'express';
import heartbeatRouter from './heartbeatRouter';
import adminRouter from './adminRouter';

const apiRouter = Router();

apiRouter.use('/heartbeat', heartbeatRouter);
apiRouter.use('/admin', adminRouter);

export default apiRouter;
