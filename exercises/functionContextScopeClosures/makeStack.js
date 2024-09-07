function makeStack() {
  const stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(value => {
        console.log(value);
      }); 
    }
  }
}

let stck = makeStack();

stck.push(1);
stck.push(2);
stck.push(3);
stck.printStack();
stck.pop();
stck.printStack();


