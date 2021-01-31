db.createUser({
    user: "user",
    pwd: "pass",
    roles: [{
        role: "readWrite",
        db: "points"
    }]
})
db = new Mongo().getDB("points");