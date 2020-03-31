import { Router } from 'express';
// import { deleteToken, postToken, postRefreshToken } from '@controllers/tokenController';
// import { authenticateToken } from '@src/middleware/token.middleware';
import {
    accessTokenRequestValidationRules,
    refreshAccessTokenRequestValidationRules,
    deleteRefreshTokenValidationRules
} from '@src/middlewares/validationMiddleware';

import { validate } from '@server-common/middleware/validationMiddleware';

const tokenRouter = Router();

// tokenRouter.delete('/', deleteRefreshTokenValidationRules(), validate, authenticateToken, deleteToken);
// tokenRouter.post('/', accessTokenRequestValidationRules(), validate, postToken);
// tokenRouter.post('/refresh', refreshAccessTokenRequestValidationRules(), validate, postRefreshToken);

export default tokenRouter;
