// class Shape {
//   color: string;
//   thickness: number;
//   constructor(){
//     console.log('C-tor Shape');
//   }
// }
// class Line extends Shape {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
//   constructor(){
//     super();
//     console.log('C-tor Line');
//   }
// }
// class Rectangle extends Shape {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
// }
// class Triangle extends Shape {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
//   x3: number;
//   y3: number;
// }
// class Ellipse extends Shape {
//   x1: number;
//   y1: number;
//   width: number;
//   height: number;
// }

// const line: Line = new Line();
// line.x1 = line.y1 = 0;
// line.x2 = line.y2 = 10;
// line.color = 'red';
// line.thickness = 3;
// console.log(line.color, line.x2);

// // const shape: Shape = new Line();

// const shapes: Shape[] = [];
// shapes[0] = new Line();
// shapes[1] = new Rectangle();
// shapes[2] = line;
// shapes[3] = new Triangle();
// shapes[4] = new Ellipse();

// // const line2 = <Line>shapes[2];
// // console.log(line2.color, line2.x2);

// let line2;

// if(shapes[2] instanceof Ellipse)
//   line2 = <Ellipse>shapes[2];