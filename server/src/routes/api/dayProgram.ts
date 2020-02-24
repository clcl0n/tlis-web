import { Router } from 'express';
import { addNewDayProgram, getCurrentDayProgram } from '@controllers/dayProgram.controller';
import { authenticateToken } from '@src/middleware/token.middleware';

const dayProgramRouter = Router();

dayProgramRouter.get('/', getCurrentDayProgram);
dayProgramRouter.post('/', authenticateToken, addNewDayProgram);

export default dayProgramRouter;
