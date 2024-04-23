import { Blog } from "../schema/model.js"


// Create a blog
export let createBlog = async(req, res)=> {
    let blogData = req.body

    try {
        let result = await Blog.create(blogData)

        res.status(201).json({
            success: true,
            message: "Blog created successfully."
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            message: error.message
        })
    }
}

// Read a blog
export let readBlog = async (req, res)=> {
    try {
        let result = await Blog.find({}) // show all data from database

        res.status(200).json({
            status: true,
            message: "Blog read Successfully",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

// Update a blog
export let updateBlog = async (req, res)=> {
    let blogId = req.params.blogId 
    let blogData = req.body

    try {
        let result = await Blog.findByIdAndUpdate(blogId, blogData, {new : true})
        // console.log(result)
        // console.log(blogId)
        // console.log(blogData)

        res.status(201).json({
            success: true,
            message: "Blog updated successfully.",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// Delete a blog
export let deleteBlog = async(req, res)=> {
    let blogId = req.params.blogId

    try {
        let result = await Blog.findByIdAndDelete(blogId)

        res.status(201).json({
            success: true,
            message: "Blog deleted successfully.",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
    
}