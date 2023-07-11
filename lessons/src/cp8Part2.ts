// Используя интерфейс и классы из предыдущего задания,
// добавьте к классам базовый класс Persons для хранения
// общих полей: ФИО, год рождения, адрес. 
// Кроме того, добавьте две статические переменные:
//  count и count_clients для подсчета числа сотрудников
// (классы Supervisers и Jobs) и клиентов организации (класс Clients). 
// Создайте несколько объектов, используя ссылки обобщенного типа PersonInterface. 
// Выведите информацию по объектам, а также число сотрудников и клиентов.

// console.log("№2");
// console.log();

// interface PersonInterface {
//     getInfo(): string;
//     getSatus(): string;
//     getFIO(): string;
// }

// class Persons {
//      protected _fio: string;
//      protected _dateOfBirth: string;
//      protected _address: string;
//      protected static count: number = 0;
//      protected static countClients: number = 0;
     
//      constructor(f: string, dOB: string, a: string){
//          this._fio = f;
//          this._dateOfBirth= dOB;
//          this._address = a;
//      }
//     public static getCount(): string {
//         return `Количество сотрудников: ${Persons.count}`;
//     }
//     public static getCountClients(): string {
//         return `Количество клиентов: ${Persons.countClients}`;
//     }
// }

// class Supervisers2 extends Persons implements PersonInterface {
//     private _position: string;
//     private _department: string;
//     private _telephoneNumber: string;
    
//     constructor(f: string, p: string, dOB: string,  tN: string, a: string, d?: string){
//         super(f, dOB, a);
//         this._position = p;
//         this._department = d || "–";
//         this._telephoneNumber = tN;
//         Persons.count++;
//     }
    
//     public getInfo(): string {
//         return `Общая информация о руководителе:
//         ФИО: ${this._fio}
//         Должность: ${this._position}
//         Дата рождения: ${this._dateOfBirth}
//         Подразделение: ${this._department}
//         Номер телефона: ${this._telephoneNumber}
//         Адрес: ${this._address}`;
//     }
//     public getSatus(): string {
//         return `Статус руководителя:
//         Должность: ${this._position}`;
//     }
//     public getFIO(): string {
//         return `ФИО руководителя: ${this._fio}`;
//     }
// }
// class Jobs2 extends Persons implements PersonInterface {
//     private _position: string;
//     private _department: string;
//     private _telephoneNumber: string;
    
//     constructor(f: string, p: string, dOB: string,  tN: string, a: string, d?: string){
//         super(f, dOB, a);
//         this._position = p;
//         this._department = d || "–";
//         this._telephoneNumber = tN;
//         Persons.count++;
//     }
    
//     public getInfo(): string {
//         return `Общая информация о рядовом сотруднике:
//         ФИО: ${this._fio}
//         Должность: ${this._position}
//         Дата рождения: ${this._dateOfBirth}
//         Подразделение: ${this._department}
//         Номер телефона: ${this._telephoneNumber}
//         Адрес: ${this._address}`;
//     }
//     public getSatus(): string {
//         return `Статус рядового сотрудника:
//         Должность: ${this._position}`;
//     }
//     public getFIO(): string {
//         return `ФИО рядового сотрудника: ${this._fio}`;
//     }
// }
// class Clients2 extends Persons implements PersonInterface {
//     private _position: string;
//     private _department: string;
//     private _telephoneNumber: string;
    
//     constructor(f: string, p: string, dOB: string,  tN: string, a: string, d?: string){
//         super(f, dOB, a);
//         this._position = p;
//         this._department = d || "–";
//         this._telephoneNumber = tN;
//         Persons.countClients++;
//     }
    
//     public getInfo(): string {
//         return `Общая информация о клиенте:
//         ФИО: ${this._fio}
//         Должность: ${this._position}
//         Дата рождения: ${this._dateOfBirth}
//         Подразделение: ${this._department}
//         Номер телефона: ${this._telephoneNumber}
//         Адрес: ${this._address}`;
//     }
//     public getSatus(): string {
//         return `Статус клиента:
//         Должность: ${this._position}`;
//     }
//     public getFIO(): string {
//         return `ФИО клиента: ${this._fio}`;
//     }
// }

// const superviser1: PersonInterface = new Supervisers2("Иванов Иван Иванович", "Топ-менеджер", "24.09.1980", "+79150071546", "г. Москва", "Отдел продаж");
// console.log(superviser1.getFIO());
// console.log();
// console.log(superviser1.getSatus());
// console.log();
// console.log(superviser1.getInfo());
// console.log();

// const job1: PersonInterface = new Jobs2("Петров Пётр Петрович", "Веб-разработчик", "01.03.1990", "+339108733457", "г. Париж", "Отдел разработки");
// console.log(job1.getFIO());
// console.log();
// console.log(job1.getSatus());
// console.log();
// console.log(job1.getInfo());
// console.log();

// const client1: PersonInterface = new Clients2("Ромашкина Роза Валерьевна", "Клиент", "10.06.1987", "+79125082166", "г. Милан", "–");
// console.log(client1.getFIO());
// console.log();
// console.log(client1.getSatus());
// console.log();
// console.log(client1.getInfo());
// console.log();

// console.log(Persons.getCount());
// console.log(Persons.getCountClients());