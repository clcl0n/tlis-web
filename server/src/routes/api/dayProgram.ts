import { Router } from 'express';
import { addNewDayProgram, getCurrentDayProgram } from '@controllers/dayProgram.controller';
import { authenticateToken } from '@src/middleware/token.middleware';
import { validate, addNewDayProgramValidationRules } from '@src/middleware/validation.middleware';

const dayProgramRouter = Router();

dayProgramRouter.get('/', getCurrentDayProgram);
dayProgramRouter.post('/', addNewDayProgramValidationRules(), validate, authenticateToken, addNewDayProgram);

export default dayProgramRouter;
