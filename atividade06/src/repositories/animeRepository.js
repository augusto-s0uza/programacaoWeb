const {v4:uuidv4}=require('uuid');

class animeRepository{

    constructor(){
        this.animes=[
            {id:uuidv4(),name:'Dragon Ball Z',genre:'Aventura',studio:'Toei Animation'}
        ];
    }

    getAll(){
        return this.animes;
    }

    getByID(id){
        return this.animes.find(anime=>anime.id===id);
    }

    create(data){
        const newAnime={id:uuidv4(),...data};
        this.animes.push(newAnime);
        return newAnime;

    }

    update(id,updatedData){
        const index=this.animes.findIndex(anime=>anime.id===id);
        if(index===-1) return null;
        this.animes[index]={...this.animes[index],...updatedData};
        return this.animes[index];
    }

    delete(id){
        const index=this.animes.findIndex(anime=>anime.id===id);
        if(index===-1) return false;
        this.animes.split(index,1);
        return true;
    }

}
module.exports=animeRepository;