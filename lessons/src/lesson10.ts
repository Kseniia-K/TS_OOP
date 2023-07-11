// class Car {
//   public speed: number;
//   public power: number;
//   private static counter: number = 0;

//   constructor(s: number, p: number){
//     this.speed = s;
//     this.power = p;
//     Car.counter++;
//   }
//   public static getCount() {
//     return Car.counter;
//   }
// }
// const car1 = new Car(160, 90);
// const car2 = new Car(180, 120);
// console.log(car1.speed, car1.power, Car.getCount());

// type Fruit = string;
// type Discount = number;
// type Basket = Fruit[];

// class ShoppingCart {
//   private static discount: Discount;
//   private static discountedItem: Fruit = "kiwi";
  
//   private static normalizeItem(item: Fruit): Fruit {
//     return item.trim().toLowerCase();
//   }
//   public static addItem(basket: Basket, item: Fruit): Basket {
//     item = ShoppingCart.normalizeItem(item);
//     let _basket =basket.slice();
//     _basket.push(item);
//     return _basket;
//   }
  
//   public static getDiscount(basket: Basket): Discount {
//     if (basket.indexOf(ShoppingCart.discountedItem) != -1) return ShoppingCart.discount;
//     return 0;
//   }
//   public static _getDiscount(basket: Basket): Discount {
//     for (let fruit of basket){
//       fruit = ShoppingCart.normalizeItem(fruit);
//       if (fruit == ShoppingCart.discountedItem)
//         return ShoppingCart.discount;
//     }
//     return 0;
// }

// let basket: Basket = [];
// basket = ShoppingCart.addItem(basket, 'apple');
// basket = ShoppingCart.addItem(basket, 'banana');
// let basket2 = ShoppingCart.addItem(basket, 'kiwi');
// console.log(ShoppingCart.getDiscount(basket));