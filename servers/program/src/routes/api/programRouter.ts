import { Router } from 'express';
import heartbeatRouter from './heartbeatRouter';

const programRouter = Router();

programRouter.use('/heartbeat', heartbeatRouter);

export default programRouter;
