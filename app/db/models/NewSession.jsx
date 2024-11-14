import mongoose from "mongoose";


const ChapterSchema = new mongoose.Schema({

    // Chapter
    title:{type:String, required:true},
    description:{type:String, required:true},
    course:{type:mongoose.Schema.Types.ObjectId,required:true,ref:Course},
    publish:{type:String, required:true},
    status:{type:Boolean, default:false},

})
//delete mongoose.models.Chapter;

export default mongoose.models.Chapter || mongoose.model("Chapter",ChapterSchema);