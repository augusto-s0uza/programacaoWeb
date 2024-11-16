const express=require('express');
const {v4:uuidv4}=require('uuid');

const app=express();
app.use(express.json());

const animes=[
    {
        id:uuidv4(),
        name:'Beastars-O Lobo Bom',
        genre:'Drama',
        studio:'Netflix',


    },
];

app.get('/animes',(req,res)=>{
    res.json(animes);
});

app.get('/animes/:id',(req,res)=>{
    const {id}=req.params;
    const anime=animes.find((a)=>a.id===id);

    if(!anime){
        return res.status(404).json({error:'Anime não foi encontrado'});
    }
    res.json(anime);
});

app.post('/animes',(req,res)=>{
    const {name,genre,studio}=req.body;

    if(!name || !genre || !studio){
        return res.status(400),json({Error:'Todos os campos são obrigatórios'});
    }

    const newAnime={id:uuidv4(),name,genre,studio};
    animes.push(newAnime);

    res.status(201).json(newAnime);
});

app.put('/animes/:id',(req,res)=>{
    const {id}=req.params;
    const {name,genre,studio}=req.body;

    const animeIndex=animes.findIndex((a)=>a.id===id);

    if(animeIndex===-1){
        return res.status(404).json({error:'Anime não foi encontrado'});

    }

    const updatedAnime={...animes[animeIndex],name,genre,studio};
    animes[animeIndex]=updatedAnime;

    res.json(updatedAnime);

});

app.delete('/animes/:id',(req,res)=>{
    const {id}=req.params;

    const animeIndex=animes.findIndex((a)=>a.id===id);
    if(animeIndex===-1){
        return res.status(404).json({error:'Anime não foi encontrado'});
    }
    animes.splice(animeIndex,1);
    res.status(204).send;

});

module.exports=app;

