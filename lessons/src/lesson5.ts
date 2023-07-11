// class Car {
//   private _state: boolean;
//   private _power: number;
//   private _color: string;
  
//   constructor();
//   constructor(power: number, color: string);
//   constructor(power?: number, color?: string) {
//     this._power = power || 90;
//     this.color = color || "white";
//     this._state = false;
//   }
//   set color(value) {
//     let color = "";
//     switch (value.toLowerCase()) {
//       case "red":
//         color = "FF0000";
//         break;
//       case "green":
//         color = "00FF00";
//         break;
//       case "blue":
//         color = "0000FF";
//         break;
//       case "black":
//         color = "000000";
//         break;
//       default:
//         color = "FFFFFF";
//     }
//     this._color = color;
//   }
//   get color() {
//     let color = "";
//     switch (this._color) {
//       case "FF0000":
//         color = "red";
//         break;
//       case "00FF00":
//         color = "green";
//         break;
//       case "0000FF":
//         color = "blue";
//         break;
//       case "000000":
//         color = "black";
//         break;
//       default:
//         color = "white";
//     }
//     // return this._color = color;
//     return this._color;
//   }
//   get state() {
//     return this._state;
//   }
//   get power() {
//     return this._power;
//   }
//   switchEngine() {
//     if (this._state === false) {
//       console.log("Двигатель запустился");
//       this._state = true;
//     } else {
//       console.log("Двигатель заглушился");
//       this._state = false;
//     }
//   }
// }

// const car = new Car(110, 'red');
// console.log('Before start', car.state);
// car.switchEngine();
// // car.state = false;
// console.log('Before finish', car.state);
// car.switchEngine();
// console.log(car.power, car.color, car.state);
// car.color = 'green';
// console.log(car.color);

// // const car2 = new Car();
// // console.log(car2.power, car2.color, car2.state);