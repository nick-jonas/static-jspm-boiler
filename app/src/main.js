import {copy} from './example/copy.js';
import {Vehicle} from './example/vehicle.js';
import {Motorcycle} from './example/motorcycle.js';


console.log('%c ES6 Examples -----', 'color:#5195a7');

console.log(copy.hello_world);

// Class extending

var vehicle = new Vehicle('Chevrolet', '1967');
console.log(vehicle.toString());

var motorcycle = new Motorcycle('Kawasaki', '1974');
console.log(motorcycle.toString());


// Computed method names

function createInterface(name) {
  return class {
    ['drivenBy' + name]() {
      return 'driven by ' + name;
    }
  }
}
 
const Interface = createInterface('Human');
const instance = new Interface();
 
console.log(instance.drivenByHuman());