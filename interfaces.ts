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
