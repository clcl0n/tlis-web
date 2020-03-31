import { Request, Response } from 'express';
import { addNewProgramService, getProgramPaginationService } from '@src/services/programService';
import IAddNewProgramDTO from '@shared/typings/dto/IAddNewProgramDTO';
import IProgramPaginationDTO from '@shared/typings/dto/IProgramPaginationDTO';

export const getProgram = async (req: Request, res: Response) => {
    res.sendStatus(200);
};

export const getProgramPagination = async (req: Request, res: Response) => {
    const programPaginationDTO = req.body as IProgramPaginationDTO;

    try {
        const dayPrograms = await getProgramPaginationService(programPaginationDTO);
        res.json(dayPrograms);
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const postNewProgram = async (req: Request, res: Response) => {
    const programDTO = req.body as IAddNewProgramDTO;

    try {
        addNewProgramService(programDTO);

        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
};
