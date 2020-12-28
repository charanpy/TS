//First class decorator :)
function Logger(log:string) {
  return function (constructor: Function) {
    console.log(log);
    console.log(constructor);
  };
}

// function WithTemplate(template:string,hookId:string){
//   return function(constructor:any){
//     const hookel=document.getElementById(hookId);
//     const p=new constructor();
//     console.log(p.name);
//     if(hookel){
//       hookel.innerHTML=template;
//     }
//   }
// }

@Logger('Logging-person')
//@WithTemplate('<h1>O</h1>','app')
class Persons {
  name = 'Ch';

  constructor() {
    console.log('P');
  }
}

const p = new Persons();
console.log(p);

function Log(target:any,propertyName:string |Symbol){
  console.log('prop');
  console.log(target,propertyName);

}


function Log2(target:any,name:string,description:PropertyDescriptor){
  console.log('Access');
  console.log(target,name,description)
}

//method
function Log3(target:any,name:string,descriptor:PropertyDescriptor){
  console.log('Access method');
  console.log(target,name,descriptor)

}
//parameter
function Log4(target:any,name:string,position:number){
  console.log(target,name,position)

}

class Product{
  @Log
  title:string;
  price:number;

  constructor(t:string,p:number){
    this.title=t;
    this.price=p;
  }

  @Log2
  set setPrice(val:number){
    if(val>0){
      this.price=val;
    }
  }
  @Log3
  getPrice(@Log4 tax:number){
    return this.price * (1+tax);
  }
}
