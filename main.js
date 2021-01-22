var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/basketballsprite.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var Basketball = new Basketball64(gameEngine);
	gameEngine.init(ctx);
	gameEngine.addEntity(Basketball);
	gameEngine.start();
});
