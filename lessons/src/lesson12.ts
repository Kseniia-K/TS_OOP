// abstract class ACar {
//   model: string;
//   power: number;

//   constructor(m: string, p: number) {
//     this.model = m;
//     this.power = p;
//   }
//   abstract start(): void;
//   abstract stop(): void;
// }
// function TO(car: ACar){
//   car.start();
//   car.stop();
// }
// class Car extends ACar {
//   constructor(m: string, p: number) {
//     super(m, p);
//   }
//   start(){
    
//   }
//   stop(){
    
//   }
// }

// const car = new Car('', 200);

// abstract class AreaAbstract {
//   abstract calculateArea(): number;
// }
// class Rectangle extends AreaAbstract {
//   width: number;
//   height: number;
  
//   constructor(w: number, h: number) {
//     super();
//     this.width = w;
//     this.height = h;
//   }

//   calculateArea(): number {
//     return this.width * this.height
//   }
// }
// class Circle extends AreaAbstract {
//   radius: number;
  
//   constructor(r: number) {
//     super();
//     this.radius = r;
//   }

//   calculateArea(): number {
//     return this.radius * this.radius * 3.14;
//   }
// }

// class AreaCalculator {
//   calculate(shape: AreaAbstract){
//     return shape.calculateArea();
// }

// const c = new Circle(5);
// const calc = new AreaCalculator();
// calc.calculate(c); 


// class Invoice{}

// class InvoiceStore {
//   invoice: Invoice;

//   constructor(invoice: Invoice) {
//     this.invoice = invoice;
//   }

//   saveToFile(filename: string){}
//   saveToDatabase(){}
// }

// abstract class AInvoiceStore {
//   abstract save(invoice: Invoice): void;
// }

// class Database extends AInvoiceStore {
//   save(invoice: Invoice): void {
    
//   }
// }

// class MyFile extends AInvoiceStore {
//   save(invoice: Invoice): void {
    
//   }
// }


// abstract class ServerAbstract {
//   version: string;
  
//   constructor(version: string) {
//     this.version = version;
//   }

//   abstract connect(id: number): boolean;
// }

// class Apache extends ServerAbstract {
//   connect(id: number): boolean {
//     console.log("I'm Apache");
//     return true;
//   }
// }
// class Nginx extends ServerAbstract {
//   connect(id: number): boolean {
//     console.log("I'm Nginx");
//     return true;
//   }
// }
// class Client {
//   connectTo(server: ServerAbstract) {
//     server.connect(1);
//   }
// }

// const chrome = new Client();
// chrome.connectTo(new Apache("2.4"));