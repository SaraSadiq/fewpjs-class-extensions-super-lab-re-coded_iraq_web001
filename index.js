// Write your classes here
class tree {
  constructor(species) {
    this.species = species
  }

  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves"
  }
}
class Deciduous extend tree {
  constructor(species, name) {
    this.species = species
    this.name = name
  }
}
