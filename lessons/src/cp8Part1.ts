// Создайте интерфейс PersonInterface для единой работы с БД
// сотрудников. В этом интерфейсе объявите абстрактные методы:
// getInfo() – для получения общей информации о сотруднике;
// getStatus() – для получения информации о должности;
// getFIO() – для получения ФИО сотрудника.
// Создайте классы: Supervisers (для руководителей), Jobs
// (для рядовых сотрудников), Clients (для клиентов). 
// В этих классах надо хранить информацию: ФИО, должность,
// год рождения, подразделение (если есть), телефон, адрес. 
// Реализуйте интерфейс PersonInterface с определением необходимых
// методов. 
// Создайте несколько экземпляров классов Supervisers, Jobs и Clients,
// используя обобщенные ссылки типа PersonInterface. 
// Вызовите для этих объектов методы интерфейса и убедиться в их
// корректной работе.

// console.log("№1");
// console.log();

// interface PersonInterface {
//     getInfo(): string;
//     getSatus(): string;
//     getFIO(): string;
// }

// class Supervisers implements PersonInterface {
//     private _fio: string;
//     private _position: string;
//     private _dateOfBirth: string;
//     private _department: string;
//     private _telephoneNumber: string;
//     private _address: string;
    
//     constructor(f: string, p: string, dOB: string,  tN: string, a: string, d?: string){
//         this._fio = f;
//         this._position = p;
//         this._dateOfBirth = dOB;
//         this._department = d || "–";
//         this._telephoneNumber = tN;
//         this._address = a;
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
// class Jobs implements PersonInterface {
//     private _fio: string;
//     private _position: string;
//     private _dateOfBirth: string;
//     private _department: string;
//     private _telephoneNumber: string;
//     private _address: string;
    
//     constructor(f: string, p: string, dOB: string,  tN: string, a: string, d?: string){
//         this._fio = f;
//         this._position = p;
//         this._dateOfBirth = dOB;
//         this._department = d || "–";
//         this._telephoneNumber = tN;
//         this._address = a;
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
// class Clients implements PersonInterface {
//     private _fio: string;
//     private _position: string;
//     private _dateOfBirth: string;
//     private _department: string;
//     private _telephoneNumber: string;
//     private _address: string;
    
//     constructor(f: string, p: string, dOB: string,  tN: string, a: string, d?: string){
//         this._fio = f;
//         this._position = p;
//         this._dateOfBirth = dOB;
//         this._department = d || "–";
//         this._telephoneNumber = tN;
//         this._address = a;
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

// const superviser: PersonInterface = new Supervisers("Иванов Иван Иванович", "Топ-менеджер", "24.09.1980", "+79150071546", "г. Москва", "Отдел продаж");
// console.log(superviser.getFIO());
// console.log();
// console.log(superviser.getSatus());
// console.log();
// console.log(superviser.getInfo());
// console.log();

// const job: PersonInterface = new Jobs("Петров Пётр Петрович", "Веб-разработчик", "01.03.1990", "+339108733457", "г. Париж", "Отдел разработки");
// console.log(job.getFIO());
// console.log();
// console.log(job.getSatus());
// console.log();
// console.log(job.getInfo());
// console.log();


// const client: PersonInterface = new Clients("Ромашкина Роза Валерьевна", "Клиент", "10.06.1987", "+79125082166", "г. Милан", "–");
// console.log(client.getFIO());
// console.log();
// console.log(client.getSatus());
// console.log();
// console.log(client.getInfo());
// console.log();