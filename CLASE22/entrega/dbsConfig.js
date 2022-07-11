import mongoose from "mongoose";

//MONGODB CONFIG
export const db = mongoose.connect("mongodb+srv://leandromatc:BFmJpCuRLPlMb0iY@cluster0.dd2md.mongodb.net/store?retryWrites=true&w=majority", 
{ useNewUrlParser: true })

const chatSchema = new mongoose.Schema({
    author: {type: Object, required: true },
    text: {type: String, required: true},
    time: {type: String, required: true}
}, {
    versionKey: false 
})

export const msgsModel = mongoose.model("Msgs", chatSchema);