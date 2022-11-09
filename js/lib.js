class GameObject {
    x = 0
    y = 0
    width = 10
    height = 10
    imagePath = "";
    img

    constructor(x = 0, y = 0, width = 10, height = 10, imagePath = "./placeholder") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imagePath = imagePath;
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    setup() {
        this.img = loadImage(this.imagePath)
        console.log(typeof this.img)
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
}