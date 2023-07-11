// class TypeAOutlet {
//     typeAElec(){
//         return "15A";
//     }
//     typeAVoltage(){
//         return "127-220V";
//     }
// }
// class TypeAPlug {
//     electricity: string | null;
//     voltage:  string | null;
//     constructor(){
//         this.electricity = null;
//         this.voltage = null;
//     }
//     plugInto(outlet: TypeAOutlet){
//         this.electricity = outlet.typeAElec();
//         this.voltage = outlet.typeAVoltage();
//         console.log('Plugged!');
//     }
// }

// const plugA = new TypeAPlug();
// const outletA = new TypeAOutlet();
// plugA.plugInto(outletA);

// class TypeCOutlet {
//     typeCElec(){
//         return "2.5A";
//     }
//     typeCVoltage(){
//         return "220-240V";
//     }
// }

// const outletC = new TypeCOutlet();
// // plugA.plugInto(outletC); // не пролезает!

// class A2CAdapter extends TypeAOutlet {
//     typeCOutlet: TypeCOutlet;
//     constructor(typeCOutlet: TypeCOutlet){
//         super();
//         this.typeCOutlet = typeCOutlet;
//     }
//     typeAElec(){
//         return this.typeCOutlet.typeCElec();
//     }
//     typeAVoltage(){
//         return this.typeCOutlet.typeCVoltage();
//     }
// }
// const adapter = new A2CAdapter(outletC);
// plugA.plugInto(adapter);


// class WindowX {
//     private visible: boolean;
//     private modal: boolean;
//     private dialog: boolean;
    
//     constructor(d: boolean, m: boolean, v: boolean) {
//         this.dialog = d;
//         this.modal = m;
//         this.visible = v;
//     }
// }

// const win = new WindowX(true, false, true);

// class CreateWindow {
//     private visible = false;
//     private modal = false;
//     private dialog = false;
    
//     setDialog(flag: boolean){
//         this.dialog = flag;
//         return this;
//     }
//     setModal(flag: boolean){
//         this.modal = flag;
//         return this;
//     }
//     setVisible(flag: boolean){
//         this.visible = flag;
//         return this;
//     }
//     create(){
//         return new WindowX(this.dialog, this.modal, this.visible);
//     }
// }

// const builder = new CreateWindow();
// const w = builder.setVisible(true).setDialog(true).create();