// read from kbd -> write to console
// read from file -> write to console
// read from file -> write to net
// read from kbd -> write to net

// const readFromKbd = () => 'зачитали с клавиатуры';
// const readFromFile = () => 'зачитали из файла';
// const writeToConsole = (msg: string) => console.log('записали в консоль:', msg);
// const writeToNet = (msg: string) => console.log('передали по сети:', msg);

// function main(fromFile: boolean, toNet: boolean) {
//     let msg: string;
//     if (fromFile){
//         msg = readFromFile();
//         if(toNet)
//             writeToNet(msg);
//         else
//             writeToConsole(msg);
//     }
//     else {
//         msg = readFromKbd();
//         if(toNet) writeToNet(msg);
//         else writeToConsole(msg);
//     }
// }

// main(true, true);
// main(false, true);


// class readFromKbd {
//     readLn(){return "зачитали с клавиатуры"}
// }
// class writeToConsole {
//     send(msg: string){console.log('записали в консоль:', msg)}
// }
// class Processing {
//     read: readFromKbd;
//     send: any;
//     constructor(read: readFromKbd, send){
//         this.read = read;
//         this.send = send;
//     }
// }


// interface IReader {
//     read(): string;
// }
// interface IWriter {
//     write(msg: string): void;
// }

// class Processing {
//     reader: IReader;
//     writer: IWriter;
//     constructor(reader: IReader, writer: IWriter){
//         this.reader = reader;
//         this.writer = writer;
//     }
//     process(){
//         let msg = this.reader.read();
//         this.writer.write(msg);
//     }
// }
// // чтение с клавиатуры и вывод в терминал
// class readFromKbd implements IReader {
//     read(){return "зачитали с клавиатуры"}
// }
// class writeToConsole implements IWriter {
//     write(msg: string){console.log('записали в консоль:', msg)}
// }
// (new Processing(new readFromKbd(), new writeToConsole())).process();

// // чтение из файла и вывод в терминал
// class readFromFile implements IReader {
//     read(){return "зачитали из файла"}
// }
// (new Processing(new readFromFile(), new writeToConsole())).process();

// // чтение с клавиатуры и отправка данных по сети
// class writeToNet implements IWriter {
//     write(msg: string){console.log('передали по сети:', msg)}
// }
// (new Processing(new readFromKbd(), new writeToNet())).process();

// // чтение из файла и отправка данных по сети
// (new Processing(new readFromFile(), new writeToNet())).process();


// interface IDb {
//     connect(): void;
// }
// class PasswordReminder {
//     private db: IDb;
//     constructor(db: IDb) {
//         this.db = db;
//     }
// }

// class DbSql implements IDb {
//     connect() {}
// }
// let pp = new PasswordReminder(new DbSql());

// class DbNoSql implements IDb {
//     connect() {}
// }

// pp = new PasswordReminder(new DbNoSql());


// Обобщение (наследование, генерализациия)

// class A {
//     fn(){}
// }
// class B extends A {}

// const b = new B();
// b.fn();

// Реализация

// interface C {
//     fn(): void;
// }
// class D implements C {
//     fn(){}
// }

// Ассоциация
// Агрегация

// class E {
//     fn(){}
// }
// class F {
//     obj: E;
//     constructor(obj: E){
//         this.obj = obj;
//     }
//     call_fn_from_e(){
//         this.obj.fn();
//     }
// }
// const e = new E();
// const f = new F(e);
// f.call_fn_from_e();
// delete f;

// Композиция

// class X {
//     fn(){}
// }
// class Y {
//     obj: X;
//     constructor(){
//         this.obj = new X();
//     }
//     call_fn_from_x(){
//         this.obj.fn();
//     }
// }
// const y = new Y();
// y.call_fn_from_x();
// delete y;
