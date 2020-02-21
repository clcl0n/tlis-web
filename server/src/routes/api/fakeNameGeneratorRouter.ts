import { Router } from 'express';
import { getRandomFakeName } from '@controllers/fakeNameGenerator';

const fakeNameGeneratorRouter = Router();

fakeNameGeneratorRouter.use('/random', getRandomFakeName);

export default fakeNameGeneratorRouter;