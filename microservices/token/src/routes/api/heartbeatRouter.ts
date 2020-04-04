import { Router } from 'express';
import { getHeartbeat } from '@controllers/heartbeatController';

const heartbeatRouter = Router();

heartbeatRouter.get('/', getHeartbeat);

export default heartbeatRouter;
