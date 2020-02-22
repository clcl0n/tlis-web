import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import ICreateTokenRequestBody from '@src/typings/interfaces/ICreateTokenRequestBody';

const userDB = [
    {
        userName: 'tlis',
        password: 'tlis'
    }
];

const refreshTokens = [];

export const createToken = (req: Request, res: Response) => {
    const body = req.body as ICreateTokenRequestBody;
    const user = userDB.find(u => u.password === body.password && u.userName === body.username);
    if (!user) res.send(403);

    const accessToken = sign({ user: user.userName }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
    const refreshToken = sign({ user: user.userName }, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);

    res.json({ accessToken, refreshToken });
};
