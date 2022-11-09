
let backGroundImage = new GameObject(0, 0, 1000, 1000, "../assets/beach.webp")
let fisch = new GameObject(0, 0, 100, 100, "../assets/trout.png")


function setup() {
    //createCanvas just makes a canvas, for you to draw into. You can customize the size.
    createCanvas(windowWidth, windowHeight);

    //initialize position of gameobjects at the start of the game
    fisch.x = 100;
    fisch.y = 500;

    // all gameobjects need to be setup before they can be drawn
    fisch.setup()
    backGroundImage.setup()
}

function draw() {

    if (keyIsDown(LEFT_ARROW)) {
        fisch.move(-10, 0)
    }
    if (keyIsDown(RIGHT_ARROW)) {
        fisch.move(10, 0)
    }

    backGroundImage.draw()
    fisch.draw();
}

function keyIsDown() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
