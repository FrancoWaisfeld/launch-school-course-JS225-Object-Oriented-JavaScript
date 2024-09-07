let me = {
  firstName: 'Franco',
  lastName: 'Waisfeld',
};

let friend = {
  firstName: 'Carson',
  lastName: 'Fassett',
}

let mother = {
  firstName: 'Daniela',
  lastName: 'Slavin',
}

let father = {
  firstName: 'Adrian',
  lastName: 'Waisfeld',
}

let people = {
  collection: [],
  lastIndex: 0,
  fullName(person) {
    console.log(person.index + ': ' + person.firstName + ' ' + person.lastName);
  },

  rollCall() {
    this.collection.forEach(this.fullName);
  },

  add(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    person.index = this.lastIndex;
    this.lastIndex += 1;
 
    this.collection.push(person);
  },

  getIndex(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });
  
    return index;
  },

  remove(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let index = this.getIndex(person);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson(person) {
    return typeof(person.firstName) !== 'string'
    || typeof(person.lastName) !== 'string';
  },

  get(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.add(me);
people.add(mother);
people.add(father);
people.add(friend);

people.rollCall();

