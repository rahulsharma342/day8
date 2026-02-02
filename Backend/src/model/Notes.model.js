const mongoose=require('mongoose');
const notesSchema =new mongoose.Schema({
        title:String,
        discription:String,
});

const Notesmodel=mongoose.model("note",notesSchema);
module.exports=Notesmodel;
