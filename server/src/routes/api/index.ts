import { Router } from 'express';
import fakeNamesRouter from './fakeNameGeneratorRouter';

const apiRouter = Router();

apiRouter.use('/fakenamegenerator', fakeNamesRouter);

export default apiRouter;