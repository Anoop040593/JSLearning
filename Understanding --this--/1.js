function Helicopter(speed) {
  this.speed = speed;
}
//normal function
// Helicopter(100);
// console.log(this); //window object

const h = new Helicopter(200);
console.log(h.speed); //not a window object anymore, property of new object
