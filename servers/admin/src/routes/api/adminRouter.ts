import { Router } from 'express';
import { postNewAdmin } from '@controllers/adminController';
import { webAdminValidationRules } from '@src/middleware/validationMiddleware';
import { validate } from '@server-common/middleware/validationMiddleware';

const adminRouter = Router();

adminRouter.post('/', webAdminValidationRules(), validate, postNewAdmin);

export default adminRouter;
