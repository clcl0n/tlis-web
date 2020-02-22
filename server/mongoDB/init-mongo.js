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
