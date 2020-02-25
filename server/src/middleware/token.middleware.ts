import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '@utils/token.utils';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) return res.sendStatus(401);

    verifyToken(token) ? next() : res.sendStatus(403);
};
