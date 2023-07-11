// console.log('№3');
// console.log();

// class Point2 {
// 	x: number;
// 	y: number;
	
// 	constructor(); 
// 	constructor(x: number, y: number)
// 	constructor(x?: number, y?: number) {
// 		this.x = x || 0; 
// 		this.y = y || 0;
// 	}
// }

// class Line {
//   startPoint: Point2;
//   endPoint: Point2;

//   constructor(); 
// 	constructor(xsp: number, ysp: number, xep: number, yep: number)
// 	constructor(xsp?: number, ysp?: number, xep?: number, yep?: number) {
// 		this.startPoint = new Point2(xsp || 0, ysp || 0); 
// 		this.endPoint = new Point2(xep || 0, yep || 0);
// 	}

//   traverse(line: Line, line2: Line) {
//     if((line.startPoint.x >= line2.startPoint.x) && (line.endPoint.x >= line2.endPoint.x) && (line.startPoint.y >= line2.startPoint.y) && (line.endPoint.y <= line2.endPoint.y)) {
//       return "Пересекаются";
//     } else {
//       return "Не пересекаются";
//     }
//   }
// }

// const line = new Line(2,7,3,4);
// const line2 = new Line(0,1,3,5);
// console.log(line.startPoint, line.endPoint);
// console.log(line2.startPoint, line2.endPoint);
// console.log(line.traverse(line, line2));

// console.log();