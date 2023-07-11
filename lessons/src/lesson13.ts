// abstract class Animal {
//     abstract makeSound(): string;
// }
// class Cat extends Animal {
//     name: string;
//     constructor(n: string){
//         super();
//         this.name = n;
//     }
//     makeSound(){return "Мяу"};
// }
// class Dog extends Animal {
//     name: string;
//     constructor(n: string){
//         super();
//         this.name = n;
//     }
//     makeSound(){return "Гав"};
// }
// const animals: Animal[] = [new Cat("Мурзик"), new Dog("Тузик")];

// function animalSound(animals: Animal[]) {
//     return animals.map((animal) => animal.makeSound())
// }

// let sounds = animalSound(animals);
// sounds.forEach((sound) => console.log(sound));


// abstract class Discounter {
//     price:number;
//     abstract discount(): number;
// }

// class Discount extends Discounter {
//     discount(): number {
//         return this.price * 0.2;
//     }
// }

// class VipDiscount extends Discounter {
//     discount(): number {
//         return this.price * 0.4;
//     }
// }

// class SuperVipDiscount extends Discounter {
//     discount(): number {
//         return this.price * 0.6;
//     }
// }

// class Bird {
//     fly(): boolean {
//         console.log('Полетели');
//         // if(Полетели){
//         return true;
//         // не смогли полететь
//         // return false;
//         // }
//     }
// }

// function flying(bird: Bird){
//     let isOk = bird.fly();
//     if (isOk) console.log("Всё хорошо");
// }

// class Crow extends Bird {}
// const crow = new Crow();
// flying(crow);

// нарушение принципов дизайна

// усилили предусловие

// class Eagle extends Bird {
//     fly(speed: number){
//         console.log("Полетели со скоростью", speed);
//         return true;
//     }
// }

// const eagle = new Eagle();
// flying(eagle);

// ослабили постусловие

// class Eagle extends Bird {
//     fly(){
//         console.log("Полетели");
//     }
// }

// const eagle = new Eagle();
// flying(eagle);