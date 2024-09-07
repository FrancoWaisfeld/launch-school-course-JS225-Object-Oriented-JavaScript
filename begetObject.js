Object.prototype.begetObject = function() {
  Temp = function() {}
  Temp.prototype = this;
  return new Temp;
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(bar);
console.log(Object.getPrototypeOf(bar));         // true
console.log(foo.isPrototypeOf(bar));         // true