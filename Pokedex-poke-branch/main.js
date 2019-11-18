class Trainer {
  constructor(name){
    this.name = name,
    this.pokemon = []
  }
  addPoke(pokemon) {
    this.pokemon.push(pokemon)
    return `You got a ${pokemon.name} Baguette`
  }
}

class Pokemon {
  constructor(name, hp, atk, def){
  this.name = name
  this.hp = hp
  this.atk = atk
  this.def = def
  this.moves = []
 }

}

let trainer = new Trainer('Jim')

let pokemon = new Pokemon('Snorlax', '160', '110', '65');
let pokemon1 = new Pokemon('Gengar', '60', '65', '60');
let pokemon2 = new Pokemon('Lapras', '130', '85', '80');
