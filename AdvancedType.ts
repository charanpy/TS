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

//discriminated unions
interface Bird{
  type:'bird',
  flyingSpeed:number;
}
interface Horse{
  type:'horse',
  runningSpeed:number;
}

type Animal=Bird|Horse;
const animalSpeed:Animal={
  type:'bird',
  flyingSpeed:100
};

function moveAnimal(animal:Animal){
   let speed;
  switch(animal.type){
   
    case 'bird':
      speed=animal.flyingSpeed;
      break;
    case 'horse':
      speed=animal.runningSpeed;
      break;
    
  }
  console.log(speed);
}
moveAnimal(animalSpeed);

//type casting
//2-ways
//ts doesn't analyse html file, we as a dev should explicity mention what we are dng

// const paragraph=<HTMLInputElement>document.getElementById('message-output')!;
const paragraph=document.getElementById('message-output')! as HTMLInputElement;

paragraph.value='hi';

//index types

interface ErrorContainer{
  [prop:string]:string;
}
const err:ErrorContainer={
  email:'Not a valid email',
  username:'not valid'
}

//function overloads

function add6(n1:number,n2:number):number
function add6(n1:string,n2:string):string
function add6(n1: Combine, n2: Combine) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}
