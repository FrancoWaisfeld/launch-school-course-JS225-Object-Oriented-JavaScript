function extend(destination, ...args) {
  args.forEach((obj) => {
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      destination[prop] = obj[prop];
    });
  });

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
