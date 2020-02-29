import { Request, Response } from 'express';
import IDayProgramDocument from '@src/typings/interfaces/db/IDayProgramDocument';
import { dayProgramDBInsert, dayProgramPartsDBInsert } from '@src/db/db.inserts';
import IDayProgramPartDocument from '@src/typings/interfaces/db/IDayProgramPartDocument';
import { ObjectID, Timestamp } from 'mongodb';
import IAddNewDayProgramRequestBody from '@src/typings/interfaces/IAddNewDayProgramRequestBody';
import { paginationDayProgramById } from '@src/db/db.find';

export const getCurrentDayProgram = async (req: Request, res: Response) => {
    res.sendStatus(200);
};

export const getDayProgramPaginationById = async (req: Request, res: Response) => {
    try {
        const dayPrograms = await paginationDayProgramById(req.body.pageSize, req.body.lastId);
        res.json(dayPrograms);
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const addNewDayProgram = async (req: Request, res: Response) => {
    const body = req.body as IAddNewDayProgramRequestBody;

    const dayProgramPartDocuments: Array<IDayProgramPartDocument> = body.dayProgramParts.map(dayProgramPart => {
        return {
            _id: new ObjectID(),
            title: dayProgramPart.title,
            description: dayProgramPart.description,
            airtime: Timestamp.fromNumber(dayProgramPart.airtime)
        };
    });

    const dayProgramDocument: IDayProgramDocument = {
        title: body.dayProgram.title,
        date: new Date(body.dayProgram.date),
        description: body.dayProgram.description,
        programPartIDs: dayProgramPartDocuments.map(dayProgramPartDocument => dayProgramPartDocument._id)
    };

    try {
        dayProgramPartsDBInsert(...dayProgramPartDocuments);
        await dayProgramDBInsert(dayProgramDocument);
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
};
