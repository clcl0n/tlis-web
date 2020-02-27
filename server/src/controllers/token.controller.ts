import { Request, Response } from 'express';
import ICreateTokenRequestBody from '@src/typings/interfaces/ICreateTokenRequestBody';
import { findWebAdmin } from '@src/db/db.find';
import { createToken, createRefreshToken, verifyRefreshToken } from '@utils/token.utils';
import { checkPassword } from '@utils/password.utils';
import logger from '@utils/logger';

const refreshTokens = [];

export const deleteTokenController = async (req: Request, res: Response) => {
    logger.info(refreshTokens);
    if (!refreshTokens.includes(req.body.refreshToken)) return res.sendStatus(403);
    refreshTokens.splice(refreshTokens.indexOf(req.body.refreshToken), 1);

    return res.sendStatus(200);
};

export const createTokenController = async (req: Request, res: Response) => {
    if (req.body.refreshToken) {
        const refreshToken = req.body.refreshToken as string;
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
        try {
            const accessToken = verifyRefreshToken(refreshToken);
            return accessToken ? res.json(accessToken) : res.sendStatus(500);
        } catch (error) {
            return res.sendStatus(403);
        }
    } else {
        const body = req.body as ICreateTokenRequestBody;

        if (body.password && body.username) {
            const webAdmin = await findWebAdmin(body.username);
            if (webAdmin === null) return res.sendStatus(403);

            const isAuthorized = checkPassword(body.password, webAdmin.password);
            if (!isAuthorized) return res.sendStatus(403);

            try {
                const accessToken = createToken({ user: body.username });
                const refreshToken = createRefreshToken({ user: body.username });
                refreshTokens.push(refreshToken);

                return res.json({ accessToken, refreshToken });
            } catch (error) {
                return res.sendStatus(500);
            }
        } else {
            return res.sendStatus(400);
        }
    }
};
