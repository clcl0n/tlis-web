import IAddNewProgramDTO from '@src/typings/interfaces/dto/IAddNewProgramDTO';
import IProgramPartDocument from '@src/typings/interfaces/db/IProgramPartDocument';
import { ObjectID, Timestamp } from 'mongodb';
import IProgramDocument from '@src/typings/interfaces/db/IProgramDocument';
import { dayProgramPartsDBInsert, dayProgramDBInsert } from '@src/db/db.inserts';
import { paginationDayProgram } from '@src/db/db.find';
import IProgramPaginationDTO from '@src/typings/interfaces/dto/IProgramPaginationDTO';

export const getProgramPaginationService = async (programPaginationDTO: IProgramPaginationDTO) => {
    return await paginationDayProgram(programPaginationDTO.pageSize, programPaginationDTO.lastId);
};

export const addNewProgramService = async (programDTO: IAddNewProgramDTO) => {
    const dayProgramPartDocuments: Array<IProgramPartDocument> = programDTO.dayProgramParts.map(dayProgramPart => {
        return {
            _id: new ObjectID(),
            title: dayProgramPart.title,
            description: dayProgramPart.description,
            airtime: Timestamp.fromNumber(dayProgramPart.airtime)
        };
    });

    const dayProgramDocument: IProgramDocument = {
        title: programDTO.dayProgram.title,
        date: new Date(programDTO.dayProgram.date),
        description: programDTO.dayProgram.description,
        imageUrl: programDTO.dayProgram.imageUrl,
        programPartIDs: dayProgramPartDocuments.map(dayProgramPartDocument => dayProgramPartDocument._id)
    };

    dayProgramPartsDBInsert(...dayProgramPartDocuments);
    await dayProgramDBInsert(dayProgramDocument);
};
