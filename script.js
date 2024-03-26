/*
 * ICS4U - Mr. Brash 🐿️
 * 2.5 - Classes
 *
 * Classes are BLUEPRINTS of an abstract data type.
 * To create a copy of one (called an instance) we use "new"
 * See the README.md file.
 * 
 * Author:
 */

'use strict';

class Circle {
  name = "Circle";
  radius = 1;

  area () {
    return this.radius * Math.PI ** 2;
  }

  circumference () {
    return 2 * this.radius * Math.PI;
  }
}

class Rectangle {
  name = "Rectangle";
  length = 1;
  width = 1;

  
}

class Vehicle {
  type;
  num_wheels;
  num_doors;
  num_seats;
  fuel;
  can_fly = false;
}



function tankGenerator() {
  let tank = new Vehicle;
  tank.type = "AFV"
  tank.num_wheels = 14;
  tank.num_doors = 3;
  tank.num_seats = 4;
  tank.fuel = "D12A1 Diesel"
  return tank;
}

console.log(tankGenerator());
