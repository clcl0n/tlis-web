import { Request, Response } from 'express';
import ICreateTokenRequestBody from '@src/typings/interfaces/ICreateTokenRequestBody';
import { findWebAdmin } from '@src/db/db.find';
import { createToken, createRefreshToken, verifyRefreshToken, getRefreshTokenClaims } from '@utils/token.utils';
import { checkPassword } from '@utils/password.utils';
import { addNewRefreshToken, includesRefreshToken, removeRefreshToken } from '@utils/cache.utils';

export const deleteTokenController = async (req: Request, res: Response) => {
    try {
        const claims = getRefreshTokenClaims(req.body.refreshToken);

        if (!includesRefreshToken(claims.user)) return res.sendStatus(403);

        removeRefreshToken(claims.user);
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(403);
    }
};

export const refreshAccessTokenController = async (req: Request, res: Response) => {
    const refreshToken = req.body.refreshToken as string;
    const claims = getRefreshTokenClaims(req.body.refreshToken);

    if (!includesRefreshToken(claims.user)) return res.sendStatus(403);
    try {
        const accessToken = verifyRefreshToken(refreshToken);
        return accessToken ? res.json({ accessToken }) : res.sendStatus(500);
    } catch (error) {
        return res.sendStatus(403);
    }
};

export const createTokenController = async (req: Request, res: Response) => {
    const body = req.body as ICreateTokenRequestBody;

    const webAdmin = await findWebAdmin(body.username);
    if (webAdmin === null) return res.sendStatus(403);

    const isAuthorized = checkPassword(body.password, webAdmin.password);
    if (!isAuthorized) return res.sendStatus(403);

    try {
        const accessToken = createToken({ user: body.username });
        const refreshToken = createRefreshToken({ user: body.username });
        addNewRefreshToken(body.username, refreshToken);

        return res.json({ accessToken, refreshToken });
    } catch (error) {
        return res.sendStatus(500);
    }
};
