// class User {
//   private _name: string;
//   private _login: string;
//   private _password: string;
//   static count: number = 0;
  
//   constructor();
//   constructor(n: string, l: string, p: string);
//   constructor(n?: string, l?: string, p?: string) {
//     this._name = n || "Нет данных";
//     this._login = l || "Нет данных";
//     this._password = p || "Нет данных";
//     User.count++;
//   }
//   set name(value) {
//     this._name = value;
//   }
//   set login(value) {
//     console.log("Ошибка: нельзя изменить логин.");
//   }
//   set password(value) {
//     this._password = value;
//   }
//   get name() {
//     return this._name;
//   }
//   get login() {
//     return this._login;
//   }
//   get password() {
//     let code = '*';
//     return code.repeat(8);
//   }
//   showInfo() {
//     console.log(`Name: ${this._name}, Login: ${this._login}`);
//   }
// }
// class SuperUser extends User {
//   private _role: string;
//   static count = 0;
  
//   constructor(n: string, l: string, p: string, r: string){
//     super(n, l, p);
//     this._role = r;
//     SuperUser.count++;
//     User.count--;
//   }
//   set role(value) {
//     this._role = value;
//   }
//   get role() {
//     return this._role;
//   }
//   showInfo() {
//     console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
//   }
// }

// const user1 = new User('Paul McCartney', 'paul', '1234');
// const user2 = new User('George Harrison', 'george', '5678');
// const user3 = new User('Richard Starkey', 'ringo', '8523');
// const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

// user1.showInfo();
// admin.showInfo();
// console.log();

// let users = User.count;
// let admins = SuperUser.count;

// console.log(`Всего обычных пользователей: ${users}`);
// console.log(`Всего супер-пользователей: ${admins}`);
// console.log();

// user3.name = 'Ringo Star';
// user1.password = 'Pa$$w0rd';

// console.log(user3.name);
// console.log(user2.password);
// console.log(user2.login);

// user2.login = 'geo';