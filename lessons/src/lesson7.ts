// class Shape {
//   public color: string;
//   public thickness: number;
//   public draw(): void {
//     console.log('Этот метод надо переопределить!');
//   }
// }
// class Line extends Shape {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
//   public draw(): void {
//   console.log('Рисуем линию!');
//   }
// }
// class Rectangle extends Shape {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
//   public draw(): void {
//   console.log('Рисуем прямоугольник!');
//   }
// }
// class Triangle extends Shape {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
//   x3: number;
//   y3: number;
//   public draw(): void {
//   console.log('Рисуем треугольник!');
//   }
// }
// class Ellipse extends Shape {
//   x1: number;
//   y1: number;
//   width: number;
//   height: number;
//   public draw(): void {
//   console.log('Рисуем эллипс!');
//   }
// }

// const line = new Line()
// line.draw()
// const ellipse =  new Ellipse();
// ellipse.draw();

// const shapes: Shape[] = [];
// shapes[0] = new Line();
// shapes[1] = new Ellipse();
// shapes[2] = new Line();
// shapes[3] = new Rectangle();
// shapes[4] = new Ellipse();
// shapes[5] = new Triangle();

// for(let shape of shapes) {
//   shape.draw();
// }