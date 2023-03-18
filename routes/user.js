const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const User = require("../models/users")
const jwt = require('jsonwebtoken');

router.use(bodyParser.json())

//POST /api/authenticate should perform user authentication and return a JWT token.

const users = [
    { email: 'deepak@gmail.com', password: 'deepak@2023' },
    { email: 'deepakkumar@gmail.com', password: 'deepakkr@2023' }
];

router.post('/api/authenticate', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, 'my-secret-key', { expiresIn: '1h' });

    res.json({ token });
});

// POST /api/follow/{id} authenticated user would follow user with {id}

router.post("/api/follow/:id", async (req, res) => {
    try {
        const users = await User.create();
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

//POST /api/unfollow/{id} authenticated user would unfollow a user with {id}

router.post("/api/unfollow/:id", async (req, res) => {
    try {
        const users = await User.create();
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

//GET /api/user should authenticate the request and return the respective user profile.

router.get("/api/user", async (req, res) => {
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

//POST /api/like/{id} would like the post with {id} by the authenticated user.

router.post("/api/like/:id", async (req, res) => {
    try {
        const users = await User.create();
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

//POST /api/unlike/{id} would unlike the post with {id} by the authenticated user.

router.post("/api/unlike/:id", async (req, res) => {
    try {
        const users = await User.create({ _id: req.params.id }, req.body);
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

//POST /api/comment/{id} add comment for post with {id} by the authenticated user.

router.post("/api/unlike/:id", async (req, res) => {
    try {
        const users = await User.create({ _id: req.params.id }, req.body);
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

//POST /api/comment/{id} add comment for post with {id} by the authenticated user.

router.post("/api/comment/:id", async (req, res) => {
    try {
        const users = await User.create({ _id: req.params.id }, req.body);
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

router.get("*", (req, res) => {
    res.status(400).json({
        status: "Failed",
        message: "Invalid Request"
    })
})


module.exports = router;