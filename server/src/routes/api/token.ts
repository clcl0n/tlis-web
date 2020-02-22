import { Router } from 'express';
import { createToken } from '@controllers/token.controller';

const tokenRouter = Router();

tokenRouter.post('/login', createToken);

export default tokenRouter;
