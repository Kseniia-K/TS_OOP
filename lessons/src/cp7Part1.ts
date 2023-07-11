// Опишите абстрактный класс Geometry для представления геометрических фигур
// с полями: width, color для определения толщины и цвета линии, а также
// с абстрактным методом draw() для рисования конкретного графического примитива. 
// Затем, опишите дочерние классы Line, Rect, Ellipse для представления линий,
// прямоугольников и эллипсов. 
// Определите в них поля для хранения координат этих фигур и метод draw()
// для их рисования. Создайте обобщенные ссылки Geometry на объекты дочерних
// классов и вызовите у них метод draw().

console.log("№1");
console.log();

abstract class Geometry {
    width: number;
    color: string;
    
    constructor(w: number, c: string){
        this.width = w;
        this.color = c;
    }
    
    abstract draw(): void;
}
class Line extends Geometry {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    
    constructor(w: number, c: string, x1: number, y1: number, x2: number, y2: number){
        super(w, c);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    
    draw() {
        console.log(`Рисуем линию!
        Цвет линии: ${this.color}
        Толщина линии: ${this.width}
        Точка A: (${this.x1}; ${this.y1})
        Точка B: (${this.x2}; ${this.y2})`);
    }
}
class Rect extends Geometry {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    
    constructor(w: number, c: string, x1: number, y1: number, x2: number, y2: number){
        super(w, c);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    
    draw() {
        console.log(`Рисуем прямоугольник!
        Цвет линии: ${this.color}
        Толщина линии: ${this.width}
        Точка A: (${this.x1}; ${this.y1})
        Точка B: (${this.x2}; ${this.y2})`);
    }
}
class Ellipse extends Geometry {
    x1: number;
    y1: number;
    
    constructor(w: number, c: string, x1: number, y1: number){
        super(w, c);
        this.x1 = x1;
        this.y1 = y1;
    }
    draw() {
        console.log(`Рисуем эллипс!
        Цвет линии: ${this.color}
        Толщина линии: ${this.width}
        Точка A: (${this.x1}; ${this.y1})`);
    }
}

const line: Geometry = new Line(10, "blue", 2, 0, 3, 5);
line.draw();
console.log();

const rect: Geometry = new Rect(10, "green", 12, 7, 6, 1);
rect.draw();
console.log();

const ellipse: Geometry = new Ellipse(10, "red", 8, 9);
ellipse.draw();
console.log();
