//First class decorator :)
function Logger(constructor:Function){
  console.log('Logging');
  console.log(constructor)
}

@Logger
class Persons{
  name='Ch'

  constructor(){
    console.log('P');
  }
}

const p = new Persons();
console.log(p)