// let boeing747 = {
//   make: "Boeing 747",
//   capacity: 450,

//   print() {
//     console.log(this);
//   },
// };

// boeing747.print(); //this here refers to object invoking the function, which is boeing747

// const anotherPrint = boeing747.print;
// anotherPrint(); //this is now window object. Y? Becuse we are invoking the print method as a top level object

//for classes, it is like

class Aircraft {
  make = "";
  capacity = 0;

  constructor(make, capacity) {
    this.make = make;
    this.capacity = capacity;
  }

  print() {
    console.log(this);
  }
}

const boeing747 = new Aircraft("Boeing 747", 450);
boeing747.print(); //object used to invoke the function.
