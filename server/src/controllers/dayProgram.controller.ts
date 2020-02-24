import { Request, Response } from 'express';
import IDayProgramDocument from '@src/typings/interfaces/db/IDayProgramDocument';
import { dayProgramDBInsert, dayProgramPartsDBInsert } from '@src/db/db.inserts';
import IDayProgramPartDocument from '@src/typings/interfaces/db/IDayProgramPartDocument';
import { ObjectID } from 'mongodb';

export const getCurrentDayProgram = async (req: Request, res: Response) => {
    res.sendStatus(200);
};

export const addNewDayProgram = async (req: Request, res: Response) => {
    let success = false;
    const dayProgram = req.body.dayProgram as IDayProgramDocument;
    const dayProgramParts = req.body.dayProgramParts as Array<IDayProgramPartDocument>;

    if (dayProgram && dayProgramParts) {
        const programPartIDs = dayProgramParts.map(dayProgramPart => {
            const newId = new ObjectID();
            dayProgramPart._id = newId;

            return newId;
        });

        dayProgramPartsDBInsert(...dayProgramParts);

        success = await dayProgramDBInsert({
            date: dayProgram.date ? new Date(dayProgram.date) : undefined,
            description: dayProgram.description,
            programPartIDs,
            title: dayProgram.title
        });
    }

    success ? res.sendStatus(200) : res.sendStatus(400);
};
