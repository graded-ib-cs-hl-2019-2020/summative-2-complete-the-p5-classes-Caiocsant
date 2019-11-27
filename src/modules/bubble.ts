
export class Bubble {
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
        this.borderColor = borderColor
        this.color = color;
        // this.xSpeed = this.xSpeed
        // this.ySpeed = this.ySpeed
        // this.stopped = this.stopped
    }


    public stop() {
        this.stopped = true;
    }

    public go() {
        this.stopped = false;
    }

    public draw(): void {
        /* TODO REQUIRED - Make the bubbles move as long as they aren't stopped. Model after ball behavior. */
        fill(this.color);
        /* The doBorderBehavior is built in for you below. */
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);

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
}

