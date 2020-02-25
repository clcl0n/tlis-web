import { Router } from 'express';
import { createNewWebAdmin } from '@controllers/webAdmin.controller';

const webAdminRouter = Router();

webAdminRouter.post('/', createNewWebAdmin);

export default webAdminRouter;
