import { Router } from 'express';
import tokenRouter from './token';
import dayProgramRouter from './dayProgram';
import webAdminRouter from './webAdmin';

const apiRouter = Router();

apiRouter.use('/token', tokenRouter);
apiRouter.use('/dayprogram', dayProgramRouter);
apiRouter.use('/webadmin', webAdminRouter);

export default apiRouter;
