let backGroundImage = new GameObject(0, 0, 1000, 1000, "../assets/beach.webp")
let player = new GameObject(0, 0, 100, 100, "../assets/trout.png")
let coconut = new GameObject(0, 0, 50, 50, "../assets/coconut.png")
let hitCount = 0;

function setup() {
    //createCanvas just makes a canvas, for you to draw into. You can customize the size.
    createCanvas(windowWidth, windowHeight);

    //initialize position of gameobjects at the start of the game
    player.x = 100;
    player.y = 500;

    coconut.x = random(0, 800);

    // all gameobjects need to be setup before they can be drawn
    player.setup()
    backGroundImage.setup()
    coconut.setup()
}

function draw() {

    if (keyIsDown(LEFT_ARROW)) {
        player.move(-10, 0)
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.move(10, 0)
    }

    coconut.move(0, 2)

    if (coconut.touch(player)) {
        console.log("Player has touched the coconut.")
        hitCount++;
        coconut.y = 0;
        coconut.x = random(0, 800);
    }

    //need to be drawn in order of visibility
    backGroundImage.draw()
    player.draw()
    coconut.draw()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
