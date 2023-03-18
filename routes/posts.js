const express = require("express");
const router = express.Router();
const User = require("../models/users")

//POST api/posts/ would add a new post created by the authenticated user.

router.post("api/posts/"), async (req, res) => {
    try {
        const users = await User.create({
            title: req.body.title,
            description: req.body.description,
        });
        res.status(200).json({
            status: "Success",
            users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
}

//DELETE api/posts/{id} would delete post with {id} created by the authenticated user.

router.delete("api/posts/:id", async (req, res) => {
    try {
        const users = await User.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: "Success",
            users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

//GET api/posts/{id} would return a single post with {id} populated with its number of likes and comments

router.get("api/posts/:id", async (req, res) => {
    try {
        const users = await User.find({ _id: req.params.id });
        res.status(200).json({
            status: "Success",
            data: users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

//GET /api/all_posts would return all posts created by authenticated user sorted by post time.

router.get("/api/all_posts", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "Success",
            data: users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;
