// Опишите абстрактный класс Recipes (рецепты) 
// с полями: 
// название,
// тип // вегетарианский или обычный
// и абстрактными методами: 
// showIngredients // показать ингредиенты
// showRecipe // показать рецепт
// Опишите несколько дочерних классов: Salad (для салатов),
// Pizza (для пицц), Porridge (для каш). 
// В каждом дочернем классе определите поле для списка ингредиентов
// (в виде строки) и описания самого рецепта (в виде строки).
// А также реализуйте абстрактные методы базового класса Recipes. 
// Создайте несколько экземпляров дочерних классов и через общий
// интерфейс (в виде ссылок типа Recipes) вызовите методы showRecipe
// и showIngredients.

console.log("№2");
console.log();

abstract class Recipies {
    name: string;
    type: 'вегет.' | 'обычн.';
    
    constructor(n: string, t: 'вегет.' | 'обычн.'){
        this.name = n;
        this.type = t;
    }
    
    abstract showIngredients(): void;
    abstract showRecipe(): void;
}

class Salad extends Recipies {
    saladIngridients: string;
    saladRecipie: string;
    
    constructor(n: string, t: 'вегет.' | 'обычн.', sI: string, sR: string){
        super(n, t);
        this.saladIngridients = sI;
        this.saladRecipie = sR;
    }
    
    showIngredients() {
        console.log(`Ингредиенты для ${this.type} салата "${this.name}":
        ${this.saladIngridients}`);
    }
    showRecipe() {
        console.log(`Рецепт ${this.type} салата "${this.name}":
        ${this.saladRecipie}`);
    }
}
class Pizza extends Recipies {
    pizzaIngridients: string;
    pizzaRecipie: string;
    
    constructor(n: string, t: 'вегет.' | 'обычн.', pI: string, pR: string){
        super(n, t);
        this.pizzaIngridients = pI;
        this.pizzaRecipie = pR;
    }
    
    showIngredients() {
        console.log(`Ингредиенты для ${this.type} пиццы "${this.name}":
        ${this.pizzaIngridients}`);
    }
    showRecipe() {
        console.log(`Рецепт ${this.type} пиццы "${this.name}":
        ${this.pizzaRecipie}`);
    }
}
class Porridge extends Recipies {
    porrigeIngridients: string;
    porrigeRecipie: string;
    
    constructor(n: string, t: 'вегет.' | 'обычн.', porI: string, porR: string){
        super(n, t);
        this.porrigeIngridients = porI;
        this.porrigeRecipie = porR;
    }
    
    showIngredients() {
        console.log(`Ингредиенты для ${this.type} каши "${this.name}":
        ${this.porrigeIngridients}`);
    }
    showRecipe() {
        console.log(`Рецепт ${this.type} каши "${this.name}":
        ${this.porrigeRecipie}`);
    }
}

const salad: Recipies = new Salad("Оливье", "обычн.", "Картофель, морковь, огурцы, колбаса, майонез", "Отварить овощи, нарезать кубиками...");
salad.showIngredients();
salad.showRecipe();
console.log();

const pizza: Recipies = new Pizza("Маргарита", "вегет.", "Томаты, сыр, тесто", "Замесить тесто, нарезать томаты...");
pizza.showIngredients();
pizza.showRecipe();
console.log();

const porrige: Recipies = new Porridge("Овсяная", "вегет.", "Овсянка, молоко, сахар, соль", "Залить овсянку горячим молоком, добавить сахар, соль, варить 10 мин...");
porrige.showIngredients();
porrige.showRecipe();