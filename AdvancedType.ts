// Intersection types

type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startData: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: 'Max',
  privilege: ['admin'],
  startData: new Date(),
};

type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric;

// type guards
function add5(n1: Combine, n2: Combine) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log(emp.name);
  if ('privilege' in emp) {
    console.log(emp.privilege);
  }
}
printEmployeeInfo(el);

class Car{
  drive(){
    console.log("driving");
  }
}

class Truck{
  drive(){
    console.log("driving Truck");
  }

  loadCargo(amount:number){
    console.log(amount);
  }
}

type Vehicle=Car | Truck;

const v1=new Car();
const v2=new Truck();

function useVechicle(vehicle:Vehicle){
  vehicle.drive();
  // 1st method
  // if('loadCargo' in vehicle){
  //   vehicle.loadCargo(100);
  // }
  //or

  if(vehicle instanceof Truck){
    vehicle.loadCargo(100)
  }
}
useVechicle(v1);
useVechicle(v2);