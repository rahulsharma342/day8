const express = require('express');
const app = express();
const Notesmodel=require('./model/Notes.model');
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/api/notes',async(req,res)=>{
    await Notesmodel.find().then((notes)=>{
        res.status(200).json(notes);
    })
})
app.post('/api/notes',async(req,res)=>{
    const {title,discription}=req.body;
    await Notesmodel.create({title,discription}).then((note)=>{
        res.status(201).json(note);
    }).catch((err)=>{
        res.status(500).json({error:err.message});
    })
});

app.delete('/api/notes/:id',(req,res)=>{
    const id=req.params.id;
    Notesmodel.findByIdAndDelete(id).then(()=>{
        res.status(200).json({message:"Note deleted successfully"});
    })
})
app.patch('/api/notes/:id',async(req,res)=>{
    const {id}=req.params;
    const {discription}=req.body;
    await Notesmodel.findByIdAndUpdate(id,{discription}).then(()=>{
        res.status(200).json({message:"Note updated successfully"});
    })
});




module.exports = app;