import { Router } from 'express';
import { deleteToken, postToken, postRefreshToken } from '@controllers/tokenController';
import { authenticateToken } from '@src/middleware/token.middleware';
import {
    validate,
    accessTokenRequestValidationRules,
    refreshAccessTokenRequestValidationRules,
    deleteRefreshTokenValidationRules
} from '@src/middleware/validation.middleware';

const tokenRouter = Router();

tokenRouter.delete('/', deleteRefreshTokenValidationRules(), validate, authenticateToken, deleteToken);
tokenRouter.post('/', accessTokenRequestValidationRules(), validate, postToken);
tokenRouter.post('/refresh', refreshAccessTokenRequestValidationRules(), validate, postRefreshToken);

export default tokenRouter;
