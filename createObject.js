function createObject(obj) {
  function Temp() {}
  Temp.prototype = obj;
  return new Temp();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true