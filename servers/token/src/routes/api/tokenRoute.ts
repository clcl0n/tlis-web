import { Router } from 'express';
import { postToken } from '@controllers/tokenController';
import { authenticateToken } from '@src/middlewares/tokenMiddleware';
import {
    accessTokenRequestValidationRules,
    refreshAccessTokenRequestValidationRules,
    deleteRefreshTokenValidationRules
} from '@src/middlewares/validationMiddleware';

import { validate } from '@server-common/middleware/validationMiddleware';

const tokenRouter = Router();

// tokenRouter.delete('/', deleteRefreshTokenValidationRules(), validate, authenticateToken, deleteToken);
tokenRouter.post('/', accessTokenRequestValidationRules(), validate, postToken);
// tokenRouter.post('/refresh', refreshAccessTokenRequestValidationRules(), validate, postRefreshToken);

export default tokenRouter;
