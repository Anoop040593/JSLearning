let boeing747 = {
  make: "Boeing 747",
  capacity: 450,

  //   print() {
  //     console.log(this); //this works as expected. Giving the object literal itself
  //   },

  print: () => {
    console.log(this); //here it becomes window object. Becuase there is no this for arrow function.
  },
};

boeing747.print();
