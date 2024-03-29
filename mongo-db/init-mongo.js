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

db.createCollection('admins', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['username', 'password', 'isRoot'],
            properties: {
                _id: {
                    bsonType: 'objectId'
                },
                isRoot: {
                    bsonType: 'bool'
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

// db.WebAdmins.createIndex({
//     username: 1
// });

db.createCollection('programs', {
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
                imageUrl: {
                    bsonType: 'string'
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

db.createCollection('program-parts', {
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
