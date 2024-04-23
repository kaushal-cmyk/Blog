import { Schema } from "mongoose";

let blogSchema = Schema({
    title : {
        type: String,
        required: [true, "title filed is required"]
    },
    content: {
        type: String,
        required: [true, "content field is required."]
    }

},
{
    timestamps: true,
}
)


export default blogSchema