class animeService{

    constructor(animeRepository){
        this.animeRepository=animeRepository;
    }

    getAllAnimes(){
        return this.animeRepository.getAll();
    }

    getAnimeByID(id){
        const anime=this.animeRepository.getByID();
        if (!anime) throw new Error('Anime não foi encontrado');
        return anime;
    }

    createAnime(data){
        return this.animeRepository.create(data);
    }

    updateAnime(id,updatedData){
        const updateAnime=this.animeRepository.update(id,updatedData);
        if(!updateAnime) throw new Error('Anime não foi encontrado');
        return updateAnime;
    }

    deleteAnime(id){
        const deletedAnime=this.animeRepository.delete(id);
        if(!deletedAnime) throw new Error('Anime não foi encontrado');
    }


}

module.exports=animeService;