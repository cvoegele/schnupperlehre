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

    moveBy(x, y) {
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

    touch(other) {
        var rect1 = this;
        var x1 = other.x, y1 = other.y, x2 = x1 + other.width, y2 = y1 + other.height;
        if (rect1.x > x1) {
            x1 = rect1.x;
        }
        if (rect1.y > y1) {
            y1 = rect1.y;
        }
        if (rect1.x + rect1.width < x2) {
            x2 = rect1.x + rect1.width;
        }
        if (rect1.y + rect1.height < y2) {
            y2 = rect1.y + rect1.height;
        }
        return (x2 <= x1 || y2 <= y1) ? false : {x: x1, y: y1, width: x2 - x1, height: y2 - y1};
    }

}

function random(min, max) {
    return Math.random() * (max - min) + min;
}