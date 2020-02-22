import { Router } from 'express';
import fakeNamesRouter from './fakeNameGeneratorRouter';
import tokenRouter from './token';

const apiRouter = Router();

apiRouter.use('/fakenamegenerator', fakeNamesRouter);
apiRouter.use('/token', tokenRouter);

export default apiRouter;
