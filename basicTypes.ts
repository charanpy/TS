console.log('Hello!');

//*Types

function add(n1: number, n2: number, show: boolean) {
  return n1 + n2;
}

const no1 = 5;
const no2 = 2.8;
const printRes = true;
const res = add(no1, no2, printRes);
console.log(res);

//not a good prac typescript knows its type while we assign a value
//so we need not mention its type
let num: number = 5;
//good prac
//here we declare a variable which will be used later
let num1: number;

//object
let obj: {
  name: string;
} = {
  name: 'ch',
};

//array
let arr: any[];
arr = ['hi', 3];

//Tuples

const role: [number, string] = [2, 'author'];
//role.push(2);
role[0] = 5;
console.log(role[0]);

//enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
console.log(typeof Role);

enum Code {
  JS = 2,
  TS = 3,
}
console.log(Code[2], Code.JS);

//any
let anyDs: any;
anyDs = 5;
anyDs = 'str';
console.log(typeof anyDs);

//union
function combine(n1: number | string, n2: number | string) {
  let res;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    res = n1 + n2;
  } else {
    res = n1.toString() + n2.toString();
  }
  return res;
}
const combineRes1 = combine(4, 18);
const combineRes2 = combine('dp', 5);

console.log(combineRes1);
console.log(combineRes2);

// union
let unionRollNo: number | string;
unionRollNo = 1;
unionRollNo = 'au';

//Literal Type

function combineLiteral(
  n1: number | string,
  n2: number | string,
  result: string
) {
  let res;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    res = n1 + n2;
  } else {
    res = n1.toString() + n2.toString();
  }
  if (result === 'as-number') {
    return +res;
  }
  return res.toString();
}

const lit1 = combineLiteral(1, 32, 'as-string');
const lit2 = combineLiteral('hi', 'bye', 'as-string');
console.log(lit1, typeof lit1);
console.log(lit2);


//alias

type Combinable = number;
type Password= number|string;
let input: Combinable;//Combinable refers to type number
let password:Password;

function addNo(n1:number,n2:number):number{
  return n1+n2;
}

//void
function printResultVoid(num:number):void{
  console.log('Res' +num);
}
// undefined
function printResultUndefined(num:number):undefined{
  console.log('Res' +num);
  return;
}
console.log(printResultVoid(addNo(5,10)));
//Res15
//undefined
console.log(printResultUndefined(addNo(5,10)));

console.log(2);
