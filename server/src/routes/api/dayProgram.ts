import { Router } from 'express';
import { addNewDayProgram, getCurrentDayProgram, getDayProgramPaginationById } from '@controllers/dayProgramController';
import { authenticateToken } from '@src/middleware/token.middleware';
import {
    validate,
    addNewDayProgramValidationRules,
    paginationByIdValidationRules
} from '@src/middleware/validation.middleware';

const dayProgramRouter = Router();

dayProgramRouter.get('/', getCurrentDayProgram);
dayProgramRouter.post('/', addNewDayProgramValidationRules(), validate, authenticateToken, addNewDayProgram);
dayProgramRouter.post(
    '/pagination',
    authenticateToken,
    paginationByIdValidationRules(),
    validate,
    getDayProgramPaginationById
);

export default dayProgramRouter;
