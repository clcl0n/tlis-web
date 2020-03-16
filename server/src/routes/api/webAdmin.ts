import { Router } from 'express';
import { createNewWebAdmin } from '@controllers/webAdminController';
import { authenticateToken } from '@src/middleware/token.middleware';
import { webAdminValidationRules, validate } from '@src/middleware/validation.middleware';

const webAdminRouter = Router();

webAdminRouter.post('/', authenticateToken, webAdminValidationRules(), validate, createNewWebAdmin);

export default webAdminRouter;
