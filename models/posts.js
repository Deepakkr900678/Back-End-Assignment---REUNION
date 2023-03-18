const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    follow: { type: String, required: true },
    unfollow: { type: String, required: true },
    like: { type: String, required: true },
    unlike: { type: String, required: true },
    comments: { type: String, required: true },
}, { timestamps: true })

const blogModel = mongoose.model("Blog", postSchema)
module.exports = blogModel

