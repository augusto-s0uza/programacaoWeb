class animeController{

    constructor(animeService){
        this.animeService=animeService;
    }

    getAll(req,res){
        const animes=this.animeService.getAllAnimes();
        res.status(200).json(animes);
    }

    getAnimeByID(req,res){
        try{
            const anime=this.animeService.getAnimeByID(req.params.id);
            res.status(200).json(animes);
        }
        catch(error){
            res.status(404).json({message:error.message});

        }
    }

    create(req,res){
        const newAnime=this.animeService.createAnime(req.body);
        res.status(201).json(newAnime);
    }

    update(req,res){
        try{
            const updateAnime=this.animeService.updateAnime(req.params.id,req.body);
            res.status(200).json(updateAnime);
        }
        catch (error){
            res.status(400).json({message:error.message});

        }
    }

    delete(req,res){
        try{
            this.animeService.deleteAnime(req.params.id);
            res.status(204).send();
        }
        catch{
            res.status(404).json({message:error.message});

    }


}
}
module.exports=animeController;