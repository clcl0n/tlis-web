import { body } from 'express-validator';

export const deleteRefreshTokenValidationRules = () => {
    return [body('refreshToken')];
};

export const refreshAccessTokenRequestValidationRules = () => {
    return [body('refreshToken').isString()];
};

export const accessTokenRequestValidationRules = () => {
    return [body('username').isString(), body('password').isString()];
};
