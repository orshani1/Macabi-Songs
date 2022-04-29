require('dotenv').config();
const express = require('express');
const app =express();
const mongoose = require('mongoose');
const Song = require('./models/song');
const cors = require('cors');
const { ObjectUnsubscribedError } = require('rxjs');
const User = require('./models/user');
const Quote = require('./models/quote');









app.use(cors())
const port = process.env.PORT || 3000;
mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;
var dbo = db.useDb("macabi-songs");
db.on('error',(e)=>console.error(e))
db.once('open',()=>console.log('connected to db'))

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

///GET ALL SONGS
///GET ALL SONGS
///GET ALL SONGS
///GET ALL SONGS

app.get('/songs', async (req,res)=>{
    try{
        const  songs = await Song.find()
        res.json(songs)
       }
       catch(err){
        res.status(500).json( {message:err.message})
       }
})
///GET ALL SONGS
///GET ALL SONGS
///GET ALL SONGS
//.........................
///GET_SINGLE SONG
///GET_SINGLE SONG
///GET_SINGLE SONG
app.get('/songs/:id', async (req,res)=>{
    const resp = await Song.findById(req.params.id);
    if(!resp){
        res.status(404).send('not found')
    }
    else{
        res.json(resp);
    }
})
///GET_SINGLE SONG
///GET_SINGLE SONG
///GET_SINGLE SONG
//.........................
///POST_SONG
///POST_SONG
///POST_SONG
app.post('/songs' ,async (req,res)=>{
    const song = new Song({
        title:req.body.title,
        words:req.body.words,
        isSelected:req.body.isSelected,
        subWords:req.body.subWords,
        video:req.body.video    
    });
    console.log('new song = ',song);
    try{
        const newSong = await song.save();
        res.status(201).json(newSong);

    }
    catch(err){
        res.send({message:err})
    }
})

///POST_SONG
///POST_SONG
///POST_SONG

//.........................
///DELETE_SONG
///DELETE_SONG
app.delete('/songs/:id', async(req,res)=>{
   deletedSong = await Song.deleteOne({_id:req.params.id})
   res.send({message:'deleted'});
})
///DELETE_SONG
///DELETE_SONG
//.........................


///UPDATE 
///UPDATE 
///UPDATE 

app.patch('/songs/:id', async (req,res)=>{

let filter = {_id:req.params.id};
let update = { title : req.body.title,
            words:req.body.words,
            subWords:req.body.subWords,
            video:req.body.video,
            isSelected:req.body.isSelected
};

let updatedSong = await Song.findOneAndUpdate(filter,update,{new:true});
res.json(update);



});
///UPDATE 
///UPDATE 
///UPDATE 





////SONGS HTTP REQ
////SONGS HTTP REQ
////SONGS HTTP REQ
////SONGS HTTP REQ


////USERS HTTP REQ
////USERS HTTP REQ
app.get('/users',async(req,res)=>{
    const users = await User.find(); 
    console.log(users)
    res.json(users);
});
////USERS HTTP REQ
////USERS HTTP REQ

app.get('/quotes',async (req,res)=>{
    const quotes = await Quote.find();
    res.json(quotes);
})


app.listen(3000,()=> console.log('server started'))