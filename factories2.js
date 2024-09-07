function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      let visitStatus = this.visited ? 'have' : 'haven\'t';
      return `${this.name} is located in ${this.continent}.` +
             ` I ${visitStatus} visited ${this.name}.`;
    },

    visitCountry() {
      this.visited = true;
    }
  }
}

let canada = makeCountry('Canada', 'North America');

console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."