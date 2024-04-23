import mongoose from 'mongoose'

import { databaseLink } from '../utils/constant.js'

let connectToMongoDB = async ()=> {
    try {
        await mongoose.connect(databaseLink)
        console.log("application is connected to mongodb database successfully.")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectToMongoDB  