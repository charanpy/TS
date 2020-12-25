//const constgenerateError = require('constgenerateError');
let combineVal: Function;
//Function type -> describes type of arguments and return type

let combineFunc: (a:number,b:number)=> number;

function addHandler(n1:number,n2:number,cb:(num:number)=>void){
  const result=n1+n2;
  cb(result);
}
addHandler(5,6,(res)=>{
  console.log(res);
})

//unknown
let userInput:unknown;
let userPass:string;
let userFlexible:any;
//diff between unknown and any
//userPass=userInput; //unknown is not assigned to any other variable
userPass=userFlexible; //any can be assigned to other variable

//never-does not return anything 
function generateError(message:string,code:number):never{
  throw {message,errorCode:code};
}
const resErr=generateError('An error',500);
console.log(resErr);
