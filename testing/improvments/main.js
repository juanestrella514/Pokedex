
queryPokemonApi = async() => {
  for (let i = 1; i <= 100; i++) {
    let req = await fetch(`https://fizal.me/pokeapi/api/v2/pokemon/${i}.json`);
    let data = await req.json();
    let name = data.names;
    let hp = data.stats[5].stat.name
    let atk = data.stats[4].stat.name
    let def = data.stats[3].stat.name
    // this.pokemon.push(data)




  }

}
queryPokemonApi();

class Trainer {
  constructor(name){
    this.name = name
    this.pokemon = []
  }
}


class Pokemon {
  constructor(name){
  this.name = name
  this.hp = null
  this.atk = null
  this.def = null
  this.abilities = []
  // this.push(pokemon)
}
}

// let pokemon = new Pokemon('Snorlax');
// let pokemon1 = new Pokemon('Gengar');
// let pokemon2 = new Pokemon('Lapris');
