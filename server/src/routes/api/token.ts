import { Router } from 'express';
import { createTokenController } from '@controllers/token.controller';

const tokenRouter = Router();

tokenRouter.post('/', createTokenController);

export default tokenRouter;
