import Tool from "./Tool";

export default class Line extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    }
    mouseUpHandler (e) {
        this.mouseDown = false

    }
    mouseDownHandler (e) {
        this.mouseDown = true
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL()
    }
    mouseMoveHandler (e) {
        if(this.mouseDown) {
            this.currentX = e.pageX - e.target.offsetLeft;
            this.currentY = e.pageY - e.target.offsetTop;
            this.draw(this.currentX, this.currentY, this.startX, this.startY)
        }
    }
    draw(x2, y2, x1, y1) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            console.log('draw line')
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0,0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.moveTo(x1,y1)
            this.ctx.lineTo(x2, y2)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}