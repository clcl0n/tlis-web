import { Router } from 'express';
import heartbeatRouter from './heartbeatRouter';
import { postNewProgram } from '@controllers/programController';
import { addNewProgramValidationRules } from '../../middleware/validationMiddleware';
import { validate } from '@server-common/middleware/validationMiddleware';

const programRouter = Router();

programRouter.post('/', addNewProgramValidationRules(), validate, postNewProgram);
programRouter.use('/heartbeat', heartbeatRouter);

export default programRouter;
