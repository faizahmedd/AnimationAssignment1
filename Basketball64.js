class Basketball64 {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/basketballsprite.png");

        this.animations = [];
        
                                                          // x, y, width, height, frameCount, frameDuration, spacing, reverse, loop
        this.animations.push(new Animator(this.spritesheet, 300, 50, 190, 210, 5, 0.05, 90, false, true));
    };

    update() {

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, 10, 0, 3);
    };
}
