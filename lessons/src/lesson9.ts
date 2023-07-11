// // const xs = [1, 2, 3, 4, 5];
// // xs.slice(0,2);
// // console.log(xs);
// // xs.slice(0,2);
// // console.log(xs);
// // xs.slice(0,2);
// // console.log(xs);

// // xs.splice(0,2);
// // console.log(xs);
// // xs.splice(0,2);
// // console.log(xs);
// // xs.splice(0,2);
// // console.log(xs);


// // let minimum = 21;
// // function checkAge(age: number):boolean {
// //   return age >= minimum;
// // }

// // function checkAge2(age: number):boolean {
// //   let minimum = 21;
// //   return age >= minimum;
// // }

// // function checkAge3(age: number, minimum: number):boolean {
// //   return age >= minimum;
// // }
// // checkAge3(22, 21);

// type Fruit = string;
// type Discount = number;

// class ShoppingCart {
//   private _items: Fruit[];
//   private discount: Discount;
//   private discountedItem: Fruit;

//   constructor() {
//     this._items = [];
//     this.discount = 5;
//     this.discountedItem  = "kiwi";
//   }
//   private normalizeItem(item: Fruit): Fruit {
//     return item.trim().toLowerCase();
//   }
//   addItem(item: Fruit): void {
//     item = this.normalizeItem(item);
//     this._items.push(item);
//   }
//   get items(): Fruit[] {
//     return this._items.slice();
//   }
//   getDiscount(): Discount {
//     if (this._items.indexOf(this.discountedItem) != -1) return this.discount; return 0;
//   }
//   removeItem(item: Fruit): void {
//     item = this.normalizeItem(item);
//     let idx = this._items.indexOf(item);
//     this._items.splice(idx, 1);
//   }
// }

// const cart = new ShoppingCart();
// cart.addItem('Apple');
// console.log(cart.items, cart.getDiscount());
// cart.addItem('Lemon');
// console.log(cart.items, cart.getDiscount());
// cart.addItem('Orange');
// console.log(cart.items, cart.getDiscount());
// cart.addItem('Kiwi');
// cart.addItem('Kiwi');
// console.log(cart.items, cart.getDiscount());
// cart.items.pop();
// console.log(cart.items, cart.getDiscount());
// cart.removeItem('Lemon');
// console.log(cart.items, cart.getDiscount());
// cart.removeItem('Kiwi');
// console.log(cart.items, cart.getDiscount());

// type City = string;
// type Plan = City[];
// const planA: Plan = [];
// planA.push('Moskow');
// planA.push('Novosibirsk');
// planA.push('Vladivostok');
// console.log('planA', planA);

// function replan(plan: Plan, newCity: City, beforeCity: City): Plan {
//   let idx = plan.indexOf(beforeCity);
//   plan.splice(idx, 0, newCity);
//   return plan;
// }
// const planB: Plan = replan(planA, 'Habarovsk', 'Vladivostok');
// console.log('planA', planA);
// console.log('planB', planB);