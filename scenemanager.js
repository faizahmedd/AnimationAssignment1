/**
 * 
 */
 
 class SceneManager{
	constructor(game){
		this.game = game;
        this.game.camera = this;
        this.Basketball64 = new Basketball64(this.game, 450,300);
		this.loadLevel();
	};

    clearEntities(){
        this.game.entities = [];
    };

    loadLevel(){
        
        this.game.addEntity(this.Basketball64);

    };


};