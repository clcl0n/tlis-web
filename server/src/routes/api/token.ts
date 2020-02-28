import { Router } from 'express';
import {
    createTokenController,
    deleteTokenController,
    refreshAccessTokenController
} from '@controllers/token.controller';
import { authenticateToken } from '@src/middleware/token.middleware';
import {
    validate,
    accessTokenRequestValidationRules,
    refreshAccessTokenRequestValidationRules,
    deleteRefreshTokenValidationRules
} from '@src/middleware/validation.middleware';

const tokenRouter = Router();

tokenRouter.delete('/', deleteRefreshTokenValidationRules(), validate, authenticateToken, deleteTokenController);
tokenRouter.post('/', accessTokenRequestValidationRules(), validate, createTokenController);
tokenRouter.post('/refresh', refreshAccessTokenRequestValidationRules(), validate, refreshAccessTokenController);

export default tokenRouter;
