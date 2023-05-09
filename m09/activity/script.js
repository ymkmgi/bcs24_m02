let trainer = {
    Name: "Ash",
    Age: 10,
    Pokemon: ["Pikachu", "Charmander", "Squirtle"],
    Friends: {
        bestFriends: ["Brock", "Misty"],
        pokemon: ["Pikachu", "Baulbasaur"]
    },
    talk: function() {
        console.log("Pikachu! I choose you!");
    }
};

console.log(trainer.Name)
console.log(trainer.Friends.bestFriends[1])
console.log(trainer.talk)

function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;
    this.tackle = function(target){
        console.log(`${this.name} tackled ${target.name} for ${this.attack} damage!`);
        target.health -= this.attack;
        console.log(`${target.name}'s health is now reduced to ${target.health}`);
        if (target.health <= 0) {
            this.faint(target)
        }
    }
    this.faint = function(target){
        console.log(`${target.name} has fainted.`)
    }
}
let myPokemon = new Pokemon("Snorlax", 10);
let opponentPokemon = new Pokemon("Squirtle", 5);

myPokemon.tackle(opponentPokemon);