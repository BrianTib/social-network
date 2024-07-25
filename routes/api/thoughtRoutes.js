const router = require("express").Router();
const User = require("../../models/User");

/*

/api/users

GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:*/

router.get("/", (req, res) => {
    User.find({});
});

module.exports = router;
