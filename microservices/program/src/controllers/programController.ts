import { Request, Response } from 'express';
import INewProgramDTO from '../typings/INewProgramDTO';
import { dayProgramDBInsert, dayProgramPartsDBInsert } from '../database/program';
import { ObjectId } from 'mongodb';

export const postNewProgram = (req: Request, res: Response) => {
    const newProgram = req.body as INewProgramDTO;
    const programPartsIds: Array<ObjectId> = [];

    newProgram.programParts.forEach(programPart => {
        const newId = new ObjectId();
        programPartsIds.push(newId);

        dayProgramPartsDBInsert({
            ...programPart,
            _id: newId
        });
    });

    dayProgramDBInsert({
        ...newProgram.program,
        programPartIDs: programPartsIds
    });

    res.sendStatus(200);
};
