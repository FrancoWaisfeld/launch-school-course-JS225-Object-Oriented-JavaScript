function objectsEqual(obj1, obj2) {
  const obj1Entries = Object.entries(obj1).sort();
  const obj2Entries = Object.entries(obj2).sort();

  if (obj1Entries.length !== obj2Entries.length) {
    return false;
  }

  return obj1Entries.every((pair, index) => {
    return pair[0] === obj2Entries[index][0] &&
    pair[1] === obj2Entries[index][1];
  });
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false