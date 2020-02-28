import { sign, verify } from 'jsonwebtoken';
import logger from './logger';
import ITokenClaims from '@src/typings/interfaces/ITokenClaims';

export const createToken = (payload: ITokenClaims) => {
    try {
        return sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const createRefreshToken = (payload: ITokenClaims) => {
    try {
        return sign(payload, process.env.REFRESH_TOKEN_SECRET);
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const getRefreshTokenClaims = (refreshToken: string) => {
    try {
        return verify(refreshToken, process.env.REFRESH_TOKEN_SECRET) as ITokenClaims;
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const verifyRefreshToken = (refreshToken: string) => {
    try {
        const claims = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET) as ITokenClaims;
        return createToken({ user: claims.user });
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

export const verifyToken = (accessToken: string) => {
    try {
        verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        return true;
    } catch (error) {
        logger.debug(error);
        return false;
    }
};
