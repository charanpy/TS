//Built-in
const names:any[] =[];

const name1:Array<string> = [];

const promise:Promise<string> = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('This is done')
  },2000);
});

function merge<T extends object,U extends object>(objA:T,objB:U){
  return Object.assign(objA,objB);
}
const mergeObj=merge({name:'Ch',hobbies:['code']},{name:'Max',hobbies:['cric']})
console.log(mergeObj)

interface Lengthy{
  length:number
}

type Len={
  length:number
}
function count<T extends Len>(el:T):[T,string]{
  let des='Got no val';
  if(el.length > 0){
    des='Got'+el.length;
  }
  return [el,des]
}
console.log(count('Hi'));

//key constr

function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U){
  return obj[key]
}
console.log(extractAndConvert(
  {name:'cj'},"name"
))

