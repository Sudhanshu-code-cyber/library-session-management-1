import mongoose from "mongoose";

export default function Connect(){
    try {
        const connect = mongoose.connect("mongodb+srv://sudhanshuaryan:sudhanshu12@cluster0.sjuem.mongodb.net/")
        console.log(`after`)
        console.log("connected to DB");
    } catch (error) {
        console.log("error connecting to DB",error)
    }
}