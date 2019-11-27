export class Snowflake {

    /* TODO REQUIRED - Make this work. The snowflakes should drift slowly downward. 
    I have implemented only the draw() method.
     * You can base the rest of the behavior after bubbles, with only a few changes. */
    private x: number;
    private y: number;
    private size: number;
    private xSpeed: number = random(-8, 12);
    private ySpeed: number = random(1, 5);
    private stopped: boolean = false;
    private color: string = "red";
    private borderColor: string = "yellow";

    /* TODO REQUIRED - What's missing here? Add it! */
    constructor(x: number, y: number, size: number, color = "#FFFFFF80", borderColor = "black") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.borderColor = borderColor;
        this.color = color;
        this.xSpeed = this.xSpeed;
        this.ySpeed = this.ySpeed;
        this.stopped = this.stopped;
    }


    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public move(): void {
        if (this.stopped == false) {
            this.y = this.y - this.ySpeed;
            this.doBorderBehavior();
        }
    }

    public distFromMouse(): number {
        return dist(this.x, this.y, mouseX, mouseY);
    }


    /* This border behavior implements a wrap, so bubbles will flip over to the other side */
    private doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        } else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        } else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }


    public draw(): void {
        stroke(this.color);
        line(this.x, this.y + this.size / 2, this.x, this.y - this.size / 2);
        line(this.x + this.size / 2, this.y, this.x - this.size / 2, this.y);
        line(this.x - this.size / 3, this.y - this.size / 3, this.x + this.size / 3, this.y + this.size / 3);
        line(this.x - this.size / 3, this.y + this.size / 3, this.x + this.size / 3, this.y - this.size / 3);
    }

}
