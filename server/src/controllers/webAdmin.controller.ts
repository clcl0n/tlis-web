import { Request, Response } from 'express';
import { webAdminsDBInsert } from '@src/db/db.inserts';

export const createNewWebAdmin = async (req: Request, res: Response) => {
    const body = req.body;
    const isSuccess = await webAdminsDBInsert(body.username, body.password, body.isRoot);

    isSuccess ? res.sendStatus(200) : res.sendStatus(500);
};
