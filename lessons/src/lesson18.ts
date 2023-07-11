// Рефакторинг

// let coupon = "";
// let price = 0;
// ////////////////////////////
// let discount = 0;

// if(coupon == "Вам повезло!") {
//     discount = price * 0.2;
// }


// function submitOrderCreationFormIfValid(){
//     // 
// }

// function getForm(){}
// function validateFormData(){}
// function createOrder(){}
// function sendOrder(){}

// function handleForm(){
//     const formData = getForm();
//     const validData = validateFormData(formData);
//     const order = createOrder(validData);
//     sendOrder(order);
// }


// function checkAge(user, minAge) {
//     return user.age >= minAge
// }
// function findUser(user, users: []) {
//     return users.find(name => name == user)
// }

// const isChild = user.age < 18;

// if(isChild) parentControlOn()
// // 
// if(isChild) callToParents()


// class Book {}

// function coutBook(books: [Book]) {
//     return books.length;
// }

// class User {}

// function coutUser(users: [User]) {
//     return users.length;
// }

// function coutItem(items: [object]) {
//     return items.length;
// }


// function foo() {
//     while(...){
//         if(...){
//             for(...){
//                 if(...){
//                     break;
//                 }
//                 for(...){
//                     if(...){
//                         continue;
//                     }
//                 }
//             }
//         }
//     }
// }

// function foo(o, c){
//     let d;
//     if(o >= 100){
//         if (c == '...'){
//             d = o * 0.2;
//         } else {
//             d = 20;
//         }
//     } else {
//         d = 0;
//     }
//     return d;
// }

function foo(){
    if(a){
        if(b && c){
            if(d){
                return 1;
            } else{
                return -1;
            }
        } else{
            return -2;
        }
    } else {
        return -3;
    }
}
function foo2(
    if(!a) return -3
    if(!b || !c) return -2
    if(!d) return -1
    // 
)