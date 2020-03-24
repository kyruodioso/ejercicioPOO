class Forma {
    constructor(width,height,color){
        this.width= width,
        this.height=height,
        this.color=color
    }
    draw(){
        document.body.innerHTML=`<div style="width:${this.width}px; height:${this.height}px; border: 2px solid ${this.color}"></div>`
    }
};

let rectangulo = new Forma(600,300,'blue')
rectangulo.draw()


class Cuadrado extends Forma{
    constructor(width,color){
        super(width,width,color)

    }
};

let cuadrado = new Cuadrado(300,'red')
cuadrado.draw()