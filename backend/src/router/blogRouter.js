import { Router } from "express";
import { createBlog, deleteBlog, readBlog, updateBlog } from "../Controller/blogController.js";

let blogRouter = Router()
blogRouter
.route("/")
.post(createBlog)
.get(readBlog)


blogRouter
.route("/:blogId")
.patch(updateBlog)
.delete(deleteBlog)

export default blogRouter