import { Request, Response } from 'express';
import ICreateTokenRequest from '@src/typings/interfaces/ICreateTokenRequest';
// import { findWebAdmin } from '@src/db/db.find';
import { createToken, createRefreshToken, verifyRefreshToken, getRefreshTokenClaims } from '@utils/tokenUtils';
import { checkPassword } from '@utils/passwordUtils';
// import { addNewRefreshToken, includesRefreshToken, removeRefreshToken } from '@utils/cache.utils';

import { deleteRefreshTokenService } from '@src/services/tokenService';
import { getAdminByUsername } from '@src/database/admins';

export const deleteToken = async (req: Request, res: Response) => {
    try {
        deleteRefreshTokenService(req.body.refreshToken);

        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(403);
    }
};

// export const postRefreshToken = async (req: Request, res: Response) => {
//     const refreshToken = req.body.refreshToken as string;
//     const claims = getRefreshTokenClaims(req.body.refreshToken);

//     if (!includesRefreshToken(claims.user)) return res.sendStatus(403);
//     try {
//         const accessToken = verifyRefreshToken(refreshToken);
//         return accessToken ? res.json({ accessToken }) : res.sendStatus(500);
//     } catch (error) {
//         return res.sendStatus(403);
//     }
// };

export const postToken = async (req: Request, res: Response) => {
    const body = req.body as ICreateTokenRequest;
    const webAdmin = await getAdminByUsername(body.username);
    if (webAdmin === null) return res.sendStatus(403);

    const isAuthorized = checkPassword(body.password, webAdmin.password);
    if (!isAuthorized) return res.sendStatus(403);

    try {
        const accessToken = createToken({ user: body.username });
        const refreshToken = createRefreshToken({ user: body.username });
        // addNewRefreshToken(body.username, refreshToken);

        res.cookie('token', accessToken, {
            domain: '.tlis.sk',
            path: '/',
            maxAge: 900000
        });
        res.cookie('refreshToken', refreshToken, {
            domain: '.tlis.sk',
            path: '/',
            maxAge: 900000
        });
        res.send();
    } catch (error) {
        return res.sendStatus(500);
    }
};
