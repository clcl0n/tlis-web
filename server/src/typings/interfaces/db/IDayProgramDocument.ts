import { ObjectID } from 'mongodb';

export default interface IDayProgramDocument {
    _id?: ObjectID;
    title: string;
    description: string;
    date: Date;
    programPartIDs: Array<ObjectID>;
}
