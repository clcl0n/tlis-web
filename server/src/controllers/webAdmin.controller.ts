import { Request, Response } from 'express';
import { webAdminsDBInsert } from '@src/db/db.inserts';
import { verifyToken } from '@utils/token.utils';

export const createNewWebAdmin = async (req: Request, res: Response) => {
    const body = req.body;

    if (body.username && body.password && body.accessToken) {
        if (!verifyToken(body.accessToken)) return res.sendStatus(403);

        const isSuccess = await webAdminsDBInsert(body.username, body.password);

        isSuccess ? res.sendStatus(200) : res.sendStatus(500);
    } else {
        return res.sendStatus(400);
    }
};
