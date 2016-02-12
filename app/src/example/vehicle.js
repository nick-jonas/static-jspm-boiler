class Vehicle {

  constructor(make, year){
    this.make = make;
    this.year = year;
  }

  toString(){
    return 'Vehicle: ' + this.make + ' ' + this.year;
  }

}

export {Vehicle};