import { Router } from 'express';
import tokenRouter from './token';
import dayProgramRouter from './dayProgram';

const apiRouter = Router();

apiRouter.use('/token', tokenRouter);
apiRouter.use('/dayprogram', dayProgramRouter);

export default apiRouter;
