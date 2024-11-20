import mongoose from "mongoose";

export default function Connect(){
    try {
        const connect = mongoose.connect("mongodb://localhost:27017/library-session")
        console.log(`after`)
        console.log("connected to DB");
    } catch (error) {
        console.log("error connecting to DB",error)
    }
}