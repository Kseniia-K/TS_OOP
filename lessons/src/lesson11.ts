// Объектно-ориентированные принципы:
// - определение классов
// - инкапсуляция свойств и методов -> сокрытие
// - определение иерархии классов и их отношений

// class GUI {
  
// }
// class Rectangle {
//   gui: GUI
//   constructor() {
//     this.gui = new GUI()
//   }
//   draw(): GUI {
//     return this.gui
//   }
//   area() {
    
//   }
// }
// class CGA {
//   this.rect: Rectangle
//   constructor() {
//     this.rect = new Rectangle()
//   }
//   getArea() {
//     return rect.area()
//   }
// }
// class GA {
//   this.rect: Rectangle
//   constructor() {
//     this.rect = new Rectangle()
//   }
//   getShape() {
//     return rect.draw()
//   }
// }


// class Order {
  
// }
// class OrderReport {
//   private store: OrdersStore
//   private formatter: Formatter

//   constructor(store: OrdersStore, formatter: Formatter) {
//     this.store = store, 
//     this.formatter = formatter
//   }
  
//   public getOrdersInfo(startDate: Date, endDate: Date) {
//     let orders = this.store.getOrdersFromDb(startDate, endDate);
//     this.formatter.format(orders);
//   }
// }

// class Formatter {
//   format(orders: Order[]) {
    
//   }
// }
// class OrdersStore {
//   getOrdersFromDb(startDate: Date, endDate: Date): Order[] {
//     return [new Order()]
//   }
// }

// class Book {
  
// }
// class Invoice {
//   book: Book
//   total: number

//   constructor(book: Book) {
//     this.book = book
//   }

//   calculateTotal() {
    
//   }
//   // printInvoice() {
    
//   // }
//   // saveToFile(filename: string) {
    
//   // }
// }
// class InvoicePrinter {
//   private invoice: Invoice

//   constructor(invoice: Invoice) {
//     this.invoice = invoice;
//   }

//   print() {
    
//   }
// }
// class InvoiceStore {
//   private invoice: Invoice

//   constructor(invoice: Invoice) {
//     this.invoice = invoice;
//   }

//   saveToFile(filename: string) {

//   }
// }