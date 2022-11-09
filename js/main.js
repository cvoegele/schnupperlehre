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
        player.moveBy(-10, 0)
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.moveBy(10, 0)
    }

    coconut.moveBy(0, 2)

    if (coconut.touch(player)) {
        console.log("Player has touched the coconut.")
        hitCount++;
        coconut.y = 0;
        coconut.x = random(0, 800);
    }

    if (coconut.y > 1000) {
        coconut.y = 0;
    }

    //need to be drawn in order of visibility
    backGroundImage.draw()
    player.draw()
    coconut.draw()

    textSize(32)
    fill(50);
    text("Punkte " + hitCount, 10, 10, 200, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
