export class Bubble {
    constructor(x, y, size, color = "#FFFFFF80", borderColor = "black") {
        this.xSpeed = random(-8, 12);
        this.ySpeed = random(1, 5);
        this.stopped = false;
        this.color = "red";
        this.borderColor = "yellow";
        this.x = x;
        this.y = y;
        this.size = size;
        this.borderColor = borderColor;
        this.color = color;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.y = this.y - this.ySpeed;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=bubble.js.map