import { Request, Response } from 'express';

export const getHeartbeat = (req: Request, res: Response) => {
    res.sendStatus(200);
};
