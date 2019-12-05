export class Snowflake {
    constructor(x, y, size, color = "#FFFFFF80", borderColor = "black") {
        this.x = 10;
        this.y = 10;
        this.size = 10;
        this.xSpeed = random(0, 0);
        this.ySpeed = random(0, 2);
        this.stopped = false;
        this.color = "red";
        this.borderColor = "yellow";
        this.x = x;
        this.y = y;
        this.size = size;
        this.borderColor = borderColor;
        this.color = color;
        this.xSpeed = this.xSpeed;
        this.ySpeed = this.ySpeed;
        this.stopped = this.stopped;
    }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
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
    draw() {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }
}
//# sourceMappingURL=snowflakes.js.map