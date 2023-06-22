import Brush from "./Brush";

export default class Eraser extends Brush {
    constructor(canvas,socket, id) {
        super(canvas,socket, id);
        this.listen()
    }

    draw(x, y) {
        this.saveStroke = this.ctx.strokeStyle
        this.ctx.strokeStyle = 'white'
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
        console.log('draw eraser')
        this.ctx.strokeStyle = this.saveStroke
    }
}