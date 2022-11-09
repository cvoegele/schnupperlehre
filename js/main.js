let backGroundImage = new GameObject(0, 0, 1000, 1000, "../assets/beach.webp")
let player = new GameObject(0, 0, 100, 100, "../assets/trout.png")
let coconut = new GameObject(0, 0, 50, 50, "../assets/coconut.png")
var hitcount = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    backGroundImage.setup()
    player.setup()
    coconut.setup()

    player.x = 300
    player.y = 500
}

function draw() {
    if (keyIsDown(LEFT_ARROW)) {
        player.moveBy(-10, 0)
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.moveBy(10, 0)
    }

    if(coconut.touch(player)){
        coconut.y = 0
        coconut.x = random(0,800)
        hitcount++
    }

    if (coconut.y > 1000) {
        coconut.y = 0
    }

    coconut.moveBy(0, 2)

    backGroundImage.draw()
    player.draw()
    coconut.draw()

    textSize(32)
    fill(50);
    text("Punkte " + hitcount, 10, 10, 200, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
