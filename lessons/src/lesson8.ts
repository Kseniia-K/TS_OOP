// class Rectangle {
//   private _width: number;
//   private _height: number;
  
//   constructor(width: number, height: number) {
//     this._width = width;
//     this._height = height;
//   }

//   getWidth() {
//     return this._width;
//   }
//   getHeight() {
//     return this._height;
//   }

//   setWidth(val: number) {
//     this._width = val;
//   }
//   setHeigth(val: number) {
//     this._width = val;
//   }

//   public getArea(): number {
//     return this._width * this._height;
//   }
// }
// class Square extends Rectangle {
//   constructor(size: number) {
//     super(size, size);
//   }

//   setWidth(val: number) {
//     super.setWidth(val);
//     super.setHeigth(val);
//   }
//   setHeigth(val: number) {
//     super.setWidth(val);
//     super.setHeigth(val);
//   }
// }
// class Test {
//   private getAreaTest(r: Rectangle) {
//     let width = r.getWidth();
//     r.setHeigth(10);
//     console.log(`Должно быть: ${width * 10}. Есть:  ${r.getArea()}`); // исправить код?
//   }
//   public runTest(){
//     const rect: Rectangle = new Rectangle(2, 3);
//     this.getAreaTest(rect);
//     const square: Square = new Square(5);
//     this.getAreaTest(square);
//   }
// }
// new Test().runTest();