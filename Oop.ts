class Department {
  // name:string;
  // private employees:string[]=[];

  constructor(public name:string,protected employees:string[],public readonly id:string){
    
  }

  describe(this:Department){
    console.log(`Department ${this.name}:${this.id}`);  
    //this.id='10'  =>throws error as it is readonly
  }

  addEmployees(employee:string){
    this.employees.push(employee);
  }

  printEmployeeInfo(){
    console.log(this.employees.length);
  }
}

class ItDepartment extends Department{
  constructor(id:string,public admins:string[]){
    super('It',[],id);
  }
}

class Developer extends Department{
  constructor(id:string,private devs:string[]){
    super('Devs',['ch'],'dev');
  }
  addEmployees(name:string){
    this.employees.push(name);
  }
  addDevelopers(name:string){
    this.devs.push(name);
  }
  getDevelopers(){
    console.log(this.devs);
  }
}
// const account=new ItDepartment('d1',['ch']);
// account.addEmployees("Adam");
// account.describe();
// account.printEmployeeInfo();
// console.log(account)

const dev=new Developer("dev2",[]);
dev.addDevelopers("charan");
dev.getDevelopers();
dev.addEmployees("Max")
console.log(dev)