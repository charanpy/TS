abstract class Department {
  // name:string;
  // private employees:string[]=[];

  //static property
  static year = 2020;

  constructor(
    public name: string,
    protected employees: string[],
    public readonly id: string
  ) {}
  //static method
  static createEmployee(name: string) {
    return {
      name,
    };
  }
  abstract describe(this: Department): void;

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
  }
}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super('It', [], id);
  }
  describe(){
  console.log(this.id);    
  }
}

class Developer extends Department {
  private list: string;
  private static instance:Developer;
  //getter
  get getRecentDev() {
    if (this.list) {
      return this.list;
    }
    throw new Error('No dev found');
  }
  //setter
  set mostRecentDev(value: string) {
    this.addDevelopers(value);
  }
  //singleton
  private constructor(id: string, private devs: string[]) {
    super('Devs', ['ch'], 'dev');
    this.list = devs[0];
  }

  static getInstance(){
    if(this.instance){
      return this.instance;
    }
    this.instance=new Developer('d2',[]);
    return this.instance;
  }
  describe(){
    console.log("Dev");
  }
  addEmployees(name: string) {
    this.employees.push(name);
  }
  addDevelopers(name: string) {
    this.devs.push(name);
    this.list = name;
  }
  getDevelopers() {
    console.log(this.devs);
  }
}
// const account=new ItDepartment('d1',['ch']);
// account.addEmployees("Adam");
// account.describe();
// account.printEmployeeInfo();
// console.log(account)

//static method
const employee = Department.createEmployee('Unknown');
console.log(employee);
//static property
console.log(Department.year);

//const dev = new Developer('dev2', []);
const dev=Developer.getInstance()


dev.addDevelopers('charan');
dev.getDevelopers();
dev.addEmployees('Max');
//getter
console.log(dev.getRecentDev);
//setter
dev.mostRecentDev = 'jonas';
console.log(dev);
