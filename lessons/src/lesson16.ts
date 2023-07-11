// class Logger {
//     private static instance: Logger | null = null;
//     private constructor(){}
//     static getInstance(){
//         if (Logger.instance === null) Logger.instance = new Logger();;
//         return Logger.instance;
//     }
//     log(msg: string){
//         console.log(msg);
//     }
// }
// // const logger = new Logger(); – не будет работать
// const logger = Logger.getInstance();
// logger.log("From logger 1...");
// logger.log("From logger 2...");
// const myLogger = Logger.getInstance();
// myLogger.log("From myLogger 1...");
// myLogger.log("From myLogger 2...");


// class Cake {
//     cake: string;
//     constructor(){
//         this.cake = "Это торт";
//     }
//     serve(){
//         console.log(this.cake);
//     }
//     eat(){
//         console.log("Откусили кусочек торта");
//     }
// }
// const cake = new Cake();
// cake.serve();
// cake.eat();

// abstract class CakeDecorator {
//     private cake: Cake;
//     constructor(cake: Cake){
//         this.cake = cake;
//     }
//     serve(){
//         cake.serve();
//         console.log(this.topping());
//     }
//     eat(){
//         cake.eat();
//         console.log(this.topping());
//     }
//     abstract topping(): string;
// }

// class StrawberryCake extends CakeDecorator {
//     topping() {
//         return "с клубникой"
//     }
// }

// const sCake = new StrawberryCake(new Cake());
// sCake.serve();
// sCake.eat();

// class BlackberryCake extends CakeDecorator {
//     topping() {
//         return "с черникой"
//     }
// }

// const bCake = new BlackberryCake(new Cake());
// bCake.serve();
// bCake.eat();

// class BlueberryCake extends CakeDecorator {
//     topping() {
//         return "с голубикой"
//     }
// }

// так делать не надо!

// class BlackberryCake extends Cake {
//     topping: string;
//     constructor(){
//         super();
//         this.topping = "с черникой";
//     }
//     serve(){
//         super.serve();
//         console.log(this.topping);
//     }
//     eat(){
//         super.eat();
//         console.log(this.topping);
//     }
// }
// class BlueberryCake extends Cake {
//     topping: string;
//     constructor(){
//         super();
//         this.topping = "с голубикой";
//     }
//     serve(){
//         super.serve();
//         console.log(this.topping);
//     }
//     eat(){
//         super.eat();
//         console.log(this.topping);
//     }
// }

// const bCake = new BlueberryCake();
// bCake.serve();
// bCake.eat();


// interface Book {
//     display(): void;
// }

// class PrintBook implements Book {
//     display() {
//         console.log('This is a print book');
//     }
// }
// class EBook implements Book {
//     display() {
//         console.log('This is a electronic book');
//     }
// }

// abstract class EBookDecorator implements Book {
//     decoratedBook: Book;
//     style: string;
//     constructor(decoratedBook: Book, style: string){
//         this.decoratedBook = decoratedBook;
//         this.style = style;
//     }
//     display() {
//         this.decoratedBook.display();
//     }
// }

// class Epub extends EBookDecorator {
//     private setBackground(){
//         console.log("Красим в", this.style);
//     }
//     display() {
//         this.display();
//         this.setBackground();
//     }
// }

// const epub = new Epub(new EBook(), 'CSS');
// epub.display();