// console.log("№1");
// console.log();

// class Graph {
//   public value: number[] = [];
//   public name: string;
  
//   constructor();
//   constructor(v: number[], n: string);
//   constructor(v?: number[], n?: string){
//     this.value = v || [1,1,1];
//     this.name = n || "Graph";
//   }
  
//   public draw(): void {
//     console.log('Рисуем график.');
//   }
// }
// class LineGraph extends Graph {
//   public draw(): void {
//     console.log(`Строим ${this.name} со значениями ${this.value}`);
//   }
// }
// class Chart extends Graph {
//     public draw(): void {
//     console.log(`Строим ${this.name} со значениями ${this.value}`);
//   }
// }
// class Bar extends Graph {
//     public draw(): void {
//     console.log(`Строим ${this.name} со значениями ${this.value}`);
//   }
// }

// const graphes: Graph[] = [];
// graphes[0] = new LineGraph([2,3,4], "линейный график");
// graphes[1] = new Chart([0,1,5], "круговую диаграмму");
// graphes[2] = new Bar([5,13,9], "столбчатый график");

// for(let graph of graphes) {
//   graph.draw();
// }
// console.log();