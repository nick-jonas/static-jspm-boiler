import {Vehicle} from './vehicle.js';

class Motorcycle extends Vehicle{

  constructor(make, year){
    super(make, year);
  }

  toString(){
    return 'Motorcycle: ' + super.toString();
  }

}

export {Motorcycle};