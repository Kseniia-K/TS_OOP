// class Car {
//   state: boolean = false;
//   power: number;
//   color: string;

//   constructor();
//   constructor(p: number, c: string);
//   constructor(p?: number, c?: string) {
//     this.power = p || 90;
//     this.color = c || 'white';
//     this.state = false;
//   }

//   switchEngine() {
//     if(this.state === false){
//       console.log('Двигатель запустился');
//       this.state = true;
//     } else {
//       console.log('Двигатель заглох');
//       this.state = false;
//     }
//   }
  
//   // startEngine(){
//   //   if(this.state === false){
//   //     console.log('Двигатель запустился');
//   //     this.state = true;
//   //   }
//   // }
//   // stopEngine(){
//   //   if(this.state === true){
//   //   console.log('Двигатель заглох');
//   //   this.state = false; 
//   // }
// }

// const car = new Car(110, 'red');
// car.switchEngine();
// car.switchEngine();
// console.log(car.power, car.color, car.state);

// const car2 = new Car();
// console.log(car2.power, car2.color, car2.state);

// // const car3 = new Car(180);
// // console.log(car3.power, car3.color, car3.state);