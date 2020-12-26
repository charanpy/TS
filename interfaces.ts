type AddType = (a:number,b:number)=>number;

let addType:AddType=(n1:number,n2:number)=>n1+n2;

//interface
interface AddInterface{
 (a:number,b:number):number;
}
let addInterface:AddInterface=(n1:number,n2:number)=>{
  return n1+n2;
}



interface Named{
 name:string;
}

interface Greet extends Named {
  age:number;
  greet(phrase:string):void;
}

class Person implements Greet{
  constructor(public name:string,public age:number){

  }
  greet(phrase:string){
    console.log(phrase);
  }
  
}

let user1:Greet;
// user1={
//   name:'ch',
//   age:18,
//   greet(phrase:string){
//     console.log(phrase+this.name);
//   }
// }
// user1.greet("Hi");
user1=new Person('ch',18);
user1.greet('Hi');
