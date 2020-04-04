import { ObjectID } from 'mongodb';

export default interface IProgramDocument {
    _id?: ObjectID;
    title: string;
    imageUrl: string;
    description: string;
    date: Date;
    programPartIDs: Array<ObjectID>;
}
