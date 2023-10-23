const express = require("express");

const router = express.Router();

const feedController = require('../controllers/feed');

router.get("/posts", feedController.getPosts);

router.post("/post", feedController.createPost);

router.get("/users", feedController.getAllUsers);

router.post("/user", feedController.createUsers);

module.exports = {
    router: router
};