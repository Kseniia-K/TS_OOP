// interface IBird {
//     eat(): void;
//     walk(): void;
//     chirp(): void;
// }
// interface IFlyingBird extends IBird {
//     fly(): void;
// }

// class Eagle implements IFlyingBird {
//     eat(): void {}
//     walk(): void {}
//     chirp(): void {}
//     fly(): void {}
// }
// const e = new Eagle();
// e.walk();

// class Penguin implements IBird {
//     eat(): void {}
//     walk(): void {}
//     chirp(): void {}
// }
// const p = new Penguin();
// p.walk();


// abstract class WorkerAbstract {
//     name: string;
//     abstract work(): void;
// }

// interface Sleepable {
//     work(): void;
// }
// interface Eatable {
//     eat(): void;
// }
// interface Chargable {
//     charge(): void;
// }

// class HumanWorker extends WorkerAbstract implements Sleepable, Eatable {
//     work(): void {}
//     sleep(): void {}
//     eat(): void {}
// }
// class RobotWorker extends WorkerAbstract implements Chargable {
//     work(): void {}
//     charge(): void {}
// }


// class Car {}

// interface ParkingLot {}
// interface FreeParkingLot extends ParkingLot{
//     parkCar(car: Car): void;
//     upparkCar(car: Car): void;
//     getCapacity(): number;
// }
// interface PaidParkingLot extends FreeParking {
//     calculateFee(car: Car): number;
//     doPaymentt(car: Car): boolean;
// }

// interface HourlyParkingLot extends PaidParkingLot {}
// interface ConstantParkingLot extends PaidParkingLot {}

// class PaidParking implements PaidParkingLot {}
// class FreeParking implements FreeParkingLot {}