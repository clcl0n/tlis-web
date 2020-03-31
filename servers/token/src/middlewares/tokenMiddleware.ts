import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@utils/tokenUtils';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const cookieHeader = req.headers.cookie;
    const token =
        cookieHeader &&
        cookieHeader
            .split(';')
            .find(cookie => cookie.startsWith('token'))
            .split('=')[1];
    if (token === null) return res.sendStatus(401);

    verifyToken(token) ? next() : res.sendStatus(403);
};
