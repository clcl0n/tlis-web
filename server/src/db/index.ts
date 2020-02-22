import { connect } from 'mongodb';

export const connectToDB = async () => {
    const dbConnection = await connect(
        'mongodb://tlis:tlis@localhost:27017/admin?authSource=tlis&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
        {
            useUnifiedTopology: true
        }
    );
    const db = dbConnection.db('tlis');
    const a = await db
        .collection('users')
        .find({})
        .toArray();
    console.warn(a);
};
