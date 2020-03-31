import { Request, Response } from 'express';
import ICreateNewAdminDTO from '@src/typings/ICreateNewAdminDTO';
import { createNewAdminService } from '@src/services/adminService';

export const postNewAdmin = async (req: Request, res: Response) => {
    const createNewAdminDTO = req.body as ICreateNewAdminDTO;

    try {
        createNewAdminService(createNewAdminDTO);
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
};
