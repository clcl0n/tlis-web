import { Router } from 'express';
import { postNewProgram, getProgram, getProgramPagination } from '@controllers/programController';
import { authenticateToken } from '@src/middleware/token.middleware';
import {
    validate,
    addNewProgramValidationRules,
    paginationByIdValidationRules
} from '@src/middleware/validation.middleware';

const programRouter = Router();

programRouter.get('/', getProgram);
programRouter.post('/', addNewProgramValidationRules(), validate, authenticateToken, postNewProgram);
programRouter.post('/pagination', authenticateToken, paginationByIdValidationRules(), validate, getProgramPagination);

export default programRouter;
