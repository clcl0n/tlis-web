import { Router } from 'express';
import { createTokenController, deleteTokenController } from '@controllers/token.controller';
import { authenticateToken } from '@src/middleware/token.middleware';

const tokenRouter = Router();

tokenRouter.delete('/', authenticateToken, deleteTokenController);
tokenRouter.post('/', createTokenController);

export default tokenRouter;
