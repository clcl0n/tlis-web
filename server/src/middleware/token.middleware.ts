import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import logger from '@utils/logger';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) return res.sendStatus(401);

    try {
        verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch (error) {
        logger.debug(error);
        return res.sendStatus(403);
    }
};
