// Intersection types

type Admin={
  name: string;
  privilege:string[]
};

type Employee={
  name:string;
  startData:Date;
}

type ElevatedEmployee=Admin & Employee;

const el:ElevatedEmployee={
  name:'Max',
  privilege:['admin'],
  startData:new Date()
}

type Combine=string|number;
type Numeric=number|boolean;

type Universal=Combine&Numeric;


