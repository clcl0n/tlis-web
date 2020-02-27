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

db.createCollection('WebAdmins', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['username', 'password'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                username: {
                    bsonType: 'string'
                },
                password: {
                    bsonType: 'string'
                }
            }
        }
    }
});

db.WebAdmins.createIndex({
    username: 1
});

db.createCollection('DayProgram', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'description', 'date', 'programPartIDs'],
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

db.createCollection('DayProgramPart', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'airtime', 'description'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                title: {
                    bsonType: 'string'
                },
                airtime: {
                    bsonType: 'timestamp'
                },
                description: {
                    bsonType: 'string'
                }
            }
        }
    }
});
