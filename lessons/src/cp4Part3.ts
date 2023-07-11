// console.log('№3');
// console.log();

// class Stationery {
//   price: number;
//   isAbailable: boolean;
//   id: number;

//   constructor();
//   constructor(pr: number | undefined, isAv: boolean | undefined, id: number | undefined);
//   constructor(pr?: number, isAv?: boolean, id?: number){
//     this.price = pr || 0;
//     this.isAbailable = isAv || false;
//     this.id = id || 0;
//   }
// }
// class Pen extends Stationery {
//   colorInk: string;
//   thickness: number;
  
//   constructor();
//   constructor(pr: number, isAv: boolean, id: number, cInk: string, th: number);
//   constructor(pr?: number, isAv?: boolean, id?: number, cInk?: string, th?: number) {
//     super(pr, isAv, id);
//     this.colorInk = cInk || "black";
//     this.thickness = th || 0.5;
//   }
  
//   displayPen(): string {
//   return       `Ручка
//                 Цена: ${this.price}
//                 Наличие на складе: ${this.isAbailable}
//                 Идентификатор: ${this.id}
//                 Цвет чернил: ${this.colorInk}
//                 Толщина пера: ${this.thickness}`;
//   }
// }
// class Pencil extends Stationery {
//   color: string;
//   isRubber: boolean;
  
//   constructor();
//   constructor(pr: number, isAv: boolean, id: number, col: string, isR: boolean);
//   constructor(pr?: number, isAv?: boolean, id?: number, col?: string, isR?: boolean) {
//     super(pr, isAv, id);
//     this.color = col || "grey";
//     this.isRubber = isR || false;
//   }

//   displayPencil(): string {
//   return       `Карандаш
//                 Цена: ${this.price}
//                 Наличие на складе: ${this.isAbailable}
//                 Идентификатор: ${this.id}
//                 Цвет: ${this.color}
//                 Наличие ластика: ${this.isRubber}`;
//   }
// }
// class Notebook extends Stationery {
//   numPages: number;
//   style: string;
  
//   constructor();
//   constructor(pr: number, isAv: boolean, id: number, nP: number, st: string);
//   constructor(pr?: number, isAv?: boolean, id?: number, nP?: number, st?: string) {
//     super(pr, isAv, id);
//     this.numPages = nP || 48;
//     this.style = st || "squared";
//   }
//   displayNotebook(): string {
//   return       `Тетрадь
//                 Цена: ${this.price}
//                 Наличие на складе: ${this.isAbailable}
//                 Идентификатор: ${this.id}
//                 Кол-во страниц: ${this.numPages}
//                 Стиль: ${this.style}`;
//   }
// }

// const pen: Pen = new Pen();
// console.log(pen.displayPen());

// const pen2: Pen = new Pen(150, true, 7, 'blue',  0.7);
// console.log(pen2.displayPen());

// const pencil: Pencil = new Pencil();
// console.log(pencil.displayPencil());

// const pencil2: Pencil = new Pencil(70, true, 2, 'pink', false);
// console.log(pencil2.displayPencil());

// const notebook: Notebook = new Notebook();
// console.log(notebook.displayNotebook());

// const notebook2: Notebook = new Notebook(30, true, 4, 24, "lined");
// console.log(notebook2.displayNotebook());