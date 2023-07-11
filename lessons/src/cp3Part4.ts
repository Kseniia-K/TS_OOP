// console.log('№4');
// console.log();

// class Person {
//   private _lastName: string;
//   private _firstName: string;
//   private _middleName: string;
//   private _age: number;
//   private _weight: number;
//   private _id: number;

//   constructor();
//   constructor(lN: string, fN: string, mN: string, age: number, w: number, id: number)
// 	constructor(lN?: string, fN?: string, mN?: string, age?: number, w?: number, id?: number) {
// 		this._lastName = lN || "Нет данных"; 
// 		this._firstName = fN || "Нет данных";
//     this._middleName = mN || "Нет данных";
//     this._age = age || 0;
//     this._weight = w || 0;
//     this._id = id || 0;
// 	}

//   private _isNameCorrect(name: string) {
//     let reg = /[a-zA-Z -]+/;
//     if(name.match(reg) != null) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//   private _isIdCorrect(id: number): boolean {
//       return id >= 1 && id <= 5;
//   }
//   private _isAgeCorrect(age: number): boolean {
//       return age >= 18 && age <= 65;
//   }
//   private _isWeightCorrect(weight: number): boolean {
//       return weight >= 45 && weight <= 90;
//   }
  
//   set lastName(value) {
//     if(this._isNameCorrect(value)) {
//       this._lastName = value;
//     }
//     else {
//       console.log("Данные введены некорректно!");
//     }
//   }
//   set firstName(value){
//     if(this._isNameCorrect(value)) {
//       this._firstName = value;
//     }
//     else {
//       console.log("Данные введены некорректно!");
//     }
//   }
//   set middleName(value){
//     if(this._isNameCorrect(value)) {
//       this._middleName = value;
//     }
//     else {
//       console.log("Данные введены некорректно!");
//     }
//   }
//   set age(value){
//     if(this._isAgeCorrect(value)) {
//       this._age = value;
//     }
//     else {
//       console.log("Данные введены некорректно!");
//     }
//   }
//   set weight(value){
//     if(this._isWeightCorrect(value)) {
//       this._weight = value;
//     }
//     else {
//       console.log("Данные введены некорректно!");
//     }
//   }
//   set id(value){
//     if(this._isIdCorrect(value)) {
//       this._id =  value;
//     }
//     else {
//       console.log("Данные введены некорректно!");
//     }
//   }

//   get lastName() {
//     return this._lastName;
//   }
//   get firstName() {
//     return this._firstName;
//   }
//   get middleName() {
//     return this._middleName;
//   }
//   get age() {
//     return this._age;
//   }
//   get weight() {
//     return this._weight;
//   }
//   get id() {
//     return this._id;
//   }
// }

// const person1 = new Person("Ivanov","Ivan","Ivanovich",36,60,1);
// console.log(person1.lastName, person1.firstName, person1.middleName, person1.age, person1.weight, person1.id);

// const person2 = new Person();
// console.log(person2.lastName, person2.firstName, person2.middleName, person2.age, person2.weight, person2.id);