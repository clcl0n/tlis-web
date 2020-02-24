db.createUser({
    user: 'tlis',
    pwd: 'tlis',
    roles: [
        {
            role: 'readWrite',
            db: 'tlis'
        }
    ]
});

db.createCollection('DayProgram', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'description', 'date'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                title: {
                    bsonType: 'string'
                },
                description: {
                    bsonType: 'string'
                },
                date: {
                    bsonType: 'date'
                },
                programPartIDs: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'objectId'
                    }
                }
            }
        }
    }
});
