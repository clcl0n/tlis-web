import { ObjectID, Timestamp } from 'mongodb';

export default interface IProgramPartDocument {
    _id?: ObjectID;
    title: string;
    airtime: Timestamp;
    description: string;
}
