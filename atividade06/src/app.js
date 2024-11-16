const express=require('express');
const animeRepository=require('./repositories/animeRepository');
const animeService=require('./services/animeService');
const animeController=require('./controllers/animeController');
const animeRepository = require('./repositories/animeRepository');
const animeService = require('./services/animeService');
const animeController = require('./controllers/animeController');


const app=express();
app.use(express.json());

const animeRepository=new animeRepository();
const animeService=new animeService(animeRepository);
const animeController=new animeController(animeService);

app.get('/animes',(req,res)=>animeController.getAll(req,res));
app.get('/animes/:id',(req,res)=>animeController.getByID(req,res));
app.post('/animes',(req,res)=>animeController.create(req,res));
app.put('/animes/:id',(req,res)=>animeController.update(req,res));
app.delete('/animes/:id',(req,res)=>animeController.delete(req,res));

module.exports=app;

