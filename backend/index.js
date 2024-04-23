import express, { json } from 'express'
import cors from 'cors'
import { port } from './src/utils/constant.js'
import connectToMongoDB from './src/connectToDB/connectToMondb.js'
import blogRouter from './src/router/blogRouter.js'

let expressApp = express()
expressApp.use(json())  // always use expressApp.use(json()) after express()=> at the top 
expressApp.use(express.static("./public"))
expressApp.use(cors())

expressApp.listen(port, ()=> { // arrow function checks whether the application is running on the given port
    console.log(`express application is listening at port ${port}`)
})

expressApp.use("/blogs", blogRouter)

connectToMongoDB()