function makeCounterLogger(start) {
  return function(end) {
    if (start <= end) {
      for (let i = start; i <= end; i += 1) {
        console.log(i);
      }
    } else {
      for (let i = start; i >= end; i -= 1) {
        console.log(i);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);