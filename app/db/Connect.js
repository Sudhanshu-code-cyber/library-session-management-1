import mongoose from "mongoose";

export default function Connect(){
    try {
        // 20 seconds
        const connect = mongoose.connect("mongodb+srv://sudhanshuaryan:sudhanshu12@cluster0.sjuem.mongodb.net/")
        console.log("connected to DB");
    } catch (error) {
        console.log("error connecting to DB",error)
    }
}