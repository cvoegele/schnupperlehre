
let backGroundImage = new GameObject(0, 0, 1000, 1000, "../assets/beach.webp")
let player = new GameObject(0, 0, 100, 100, "../assets/trout.png")


function setup() {
    //createCanvas just makes a canvas, for you to draw into. You can customize the size.
    createCanvas(windowWidth, windowHeight);

    //initialize position of gameobjects at the start of the game
    player.x = 100;
    player.y = 500;

    // all gameobjects need to be setup before they can be drawn
    player.setup()
    backGroundImage.setup()
}

function draw() {

    if (keyIsDown(LEFT_ARROW)) {
        player.move(-10, 0)
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.move(10, 0)
    }

    backGroundImage.draw()
    player.draw();
}

function keyIsDown() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
