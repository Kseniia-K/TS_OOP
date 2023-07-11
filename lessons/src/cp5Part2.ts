// console.log("№2");
// console.log();

// class Nota {
//   private _id: number;
//   private _name: string;
//   private _duration: number;
//   private _isSharp: boolean;
//   private _isFlat: boolean;

//   constructor();
//   constructor(id: number, n: string, d: number, isS: boolean, isF: boolean);
//   constructor(id?: number, n?: string, d?: number, isS?: boolean, isF?: boolean){
//     this._id = id || 0;
//     this.name = n || "nota";
//     this.duration = d || 1;
//     this._isSharp = isS || false;
//     this._isFlat = isF || false;
//   }
//   set id(value) {
//     this._id = value;
//   }
//   set name(value) {
//     let name = "";
//     switch (value.toUpperCase()) {
//       case "C":
//         name = "До";
//         break;
//       case "D":
//         name = "Ре";
//         break;
//       case "E":
//         name = "Ми";
//         break;
//       case "F":
//         name = "Фа";
//         break;
//       case "G":
//         name = "Соль";
//         break;
//       case "A":
//         name = "Ля";
//         break;
//       case "B":
//         name = "Си";
//         break;
//       default:
//         name = "nota";
//     }
//     this._name = name;
//   }
//   set duration(value) {
//     this._duration = value;
//   }
//   set isSharp(value) {
//     this._isSharp = value;
//   }
//   set isFlat(value) {
//     this._isFlat = value;
//   }
//   get id() {
//     return this._id;
//   }
//   get name() {
//     return this._name;
//   }
//   get duration() {
//     return this._duration;
//   }
//   get isSharp() {
//     return this._isSharp;
//   }
//   get isFlat() {
//     return this._isFlat;
//   }
// }
// class C extends Nota {

// }
// class D extends Nota {
  
// }
// class E extends Nota {
  
// }
// class F extends Nota {
  
// }
// class G extends Nota {
  
// }
// class A extends Nota {
  
// }
// class B extends Nota {
  
// }

// const c = new C(1, "C", 2, true, false);
// const d = new D(2, "D", 3, true, true);
// const e = new E(3, "E", 1, false, true);
// const f = new F(4, "F", 5, true, false);
// const g = new G(5, "G", 4, true, true);
// const a = new A(6, "A", 7, false, false);
// const b = new B(7, "B", 2, false, false);

// console.log(`ID: ${c.id},
// Нота: ${c.name},
// Длительность: ${c.duration},
// Наличие бемоля: ${c.isSharp},
// Наличие диеза: ${c.isFlat}`);
// console.log();
// console.log(`ID: ${d.id},
// Нота: ${d.name},
// Длительность: ${d.duration},
// Наличие бемоля: ${d.isSharp},
// Наличие диеза: ${d.isFlat}`);
// console.log();
// console.log(`ID: ${e.id},
// Нота: ${e.name},
// Длительность: ${e.duration},
// Наличие бемоля: ${e.isSharp},
// Наличие диеза: ${e.isFlat}`);
// console.log();
// console.log(`ID: ${f.id},
// Нота: ${f.name},
// Длительность: ${f.duration},
// Наличие бемоля: ${f.isSharp},
// Наличие диеза: ${f.isFlat}`);
// console.log();
// console.log(`ID: ${g.id},
// Нота: ${g.name},
// Длительность: ${g.duration},
// Наличие бемоля: ${g.isSharp},
// Наличие диеза: ${g.isFlat}`);
// console.log();
// console.log(`ID: ${a.id},
// Нота: ${a.name},
// Длительность: ${a.duration},
// Наличие бемоля: ${a.isSharp},
// Наличие диеза: ${a.isFlat}`);
// console.log();
// console.log(`ID: ${b.id},
// Нота: ${b.name},
// Длительность: ${b.duration},
// Наличие бемоля: ${b.isSharp},
// Наличие диеза: ${b.isFlat}`);
