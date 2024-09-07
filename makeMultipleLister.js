function makeMultipleLister(multiple) {
  return function() {
    for (let count = multiple; count < 100; count += multiple) {
      console.log(count);
    }
  }
}

let lister = makeMultipleLister(13);
lister();
