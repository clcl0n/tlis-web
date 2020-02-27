import { Router } from 'express';
import { createNewWebAdmin } from '@controllers/webAdmin.controller';
import { authenticateToken } from '@src/middleware/token.middleware';

const webAdminRouter = Router();

webAdminRouter.post('/', authenticateToken, createNewWebAdmin);

export default webAdminRouter;
