import { ObjectID, Timestamp } from 'mongodb';

export default interface IDayProgramPartDocument {
    _id?: ObjectID;
    title: string;
    airtime: Timestamp;
    description: string;
}
