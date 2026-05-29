let child;

(initFlight = () => {
  let nbPassengers = 100;

  const addPassengers = () => {
    nbPassengers++;
    console.log(nbPassengers);
  };

  child = addPassengers; //reference to addPassengers function
})(); //initFlight is closed/exited

child();
//closures have nothing to do with how when
// or where you invokke your function
// but more with where you declare your function.
// closure captures the lexical environment surrounding the function
