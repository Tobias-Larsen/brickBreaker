export default class Ball {

    constructor(){
        this.image = document.getElementById('img_ball');

        this.position = {x: 10, y: 10};
        this.speed = {x: 2, y: 2}
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, 16, 16);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}