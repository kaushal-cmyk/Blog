import { Router } from "express";
import { createBlog, deleteBlog, readBlog, readSpecificBlog, updateBlog } from "../Controller/blogController.js";

let blogRouter = Router()
blogRouter
.route("/")
.post(createBlog)
.get(readBlog)


blogRouter
.route("/:blogId")
.get(readSpecificBlog)
.patch(updateBlog)
.delete(deleteBlog)

export default blogRouter