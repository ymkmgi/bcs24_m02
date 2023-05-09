const favoriteMovie = {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001 ,
    price: 3.99,
    isAvailable: true
  };
  const favoriteGame = {
    title: "Legend of Zelda Breath of the Wild",
    publisher: "Nintendo",
    year: 2017,
    producer: "Eiji Aonuma",
    isAvailable: false
  };
console.log(favoriteMovie);
console.log(favoriteGame);

// accesing array items: array[index]
// in object, keys and values together make up the object properties
// accessing object properties: object.property
console.log(favoriteMovie.director)
/*
  Objects are data type that allows us to store collections of key-value pairs.

  They can represent real-world properties such person, car or more abstract concepts

  object literal = {}
*/

// re-assign array items: array[index] = <value>

// re-assign object properties
favoriteGame.title = "Horizon Zero Dawn: Forbidden West"
console.log(favoriteGame.title)

favoriteGame.year = 2022;
favoriteGame.publisher = "Sony"
favoriteGame.price = 3490
console.log(favoriteGame.year, favoriteGame.publisher, favoriteGame.price);

// object can not only have primitive values but it can also have array and even other objects

let course = {
    title: 'Philosopy',
    description: 'Learn values of life',
    price: 5000,
    isActive: true,
    instructors: ['Mr. Johnson', 'Ms. Smith', 'Mr. Frances']
};

console.log(course)
// access the array inside course
console.log(course.instructors)
// access the second item inside the instructors array
console.log(course.instructors[1])
// delete Mr. Francis formt the array
course.instructors.pop()
console.log(course)

// add another instructor
course.instructors.push('Mr. Mcgee');
console.log(course.instructors)

let isPresent = course.instructors.includes('Mr. Johnson');
console.log(isPresent)

let instructor = {};
// if you re-assign value to a property that does not exist
// you are able to add property with value in our object

instructor.name = 'James Johnson'
console.log(instructor)

// Mini Activity 2
instructor.age = 56
instructor.gender = 'Male'
instructor.department = 'Humanities'
instructor.courses = ['Philosophy 101', 'Humanities 201'];
instructor.isActive = true
instructor.salary = 50000

console.log(instructor)

instructor.address = {
    street: '#1 Maginhawa Street',
    city: 'Quezon City',
    country: 'Philippines'
};

console.log(instructor)
// how will we access the street property of our instrustor's address property
console.log(instructor.address.street)

// create objects using a constructor function

// in JavaScript, a 'constructor' function is a special type of function that is used to create and initialize objects. It is typically used in conjunction with 'new' keyword to create new instance of an object on a template or blueprint

/*
    instance of an object is a unique occurence of an object that is created from a constructor function
        -   when 'new' keyword 
            - it create a 'new object' and initializes it with the properties and methods defined in the constructor
                - 'new object' is called instance of an object
*/
/*
    create reusable function to create several objects with similar data structure or keys

    This is useful for creating multiple instance of objects

    'this' keyword when used in a constructor function will allow us to assign a new object's properties and associating with the values received from a constructor function's parameter

    constructors are like blueprints or template to create our object from
*/
function Superhero(name, superpower, powerLevel){
    this.name = name;
    this.superpower = superpower;
    this.powerLevel = powerLevel;
}

let superhero1 = new Superhero('Saitama', 'One Punch', 300000)
console.log(superhero1)

// Mini activity 3
function Laptop(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
}

let laptop1 = new Laptop("Asus Zenbook", "Asus", 2000);
/*
    let laptop1 = Laptop("Asus Zenbook", "Asus", 2000);
        without the 'new' keyword, we cannot instantiate a new laptop object from our constructor, instead we can only invoke/call it
*/
let laptop2 = new Laptop("MacBook Pro 16", "Apple", 2499);
console.log(laptop1);
console.log(laptop2);

// Object methods
/*
    A method is a function which is a property of an object

    In essence it is still a function, however, it is now associated with an object

    And to invoke or call the function we have to access the property which contains our functions
*/

let person = {
    name: 'Shady',
    talk: function(){
        // when the 'this' keyword is used by a function within an object, it referes to the object where the function is
        // console.log(this)
        console.log(`Hi, my name is, what? My name is who? ${this.name}`);
    }
}
person.talk()

let person2 = {
    name: 'Jungkook',
    age: 26,
    address: {
        city: 'Austin',
        state: 'Texas',
        country: 'USA'
    },
    friends: ['Jin', 'V', 'Jimin'],
    introduce: function(){
        console.log(`Hi my name is ${this.name}. I am ${this.age} years old. I live in ${this.address.city}, ${this.address.state}, ${this.address.country} and my friends are ${this.friends}`)
    },
    addFriend: function(str){
        // console.log(str);
        this.friends.push(str)
        console.log(`my friends are now ${this.friends}`)
    },
    greet: function(obj){
        // console.log(obj);
        // Good day, <nameOfPerson>!
        console.log(`Good day, ${obj.name}!`)
    }
};
person2.introduce()
person2.addFriend('Suga')
person2.introduce()
person2.greet(person)

// Mini Activity 4
function Person(name, address, age) {
    // 'this' refers to object that will be made
    // adding .name allows to add/assign a property/key-value to our object
    // parameter name is assigned value
    this.name = name;
    this.address = address;
    this.age = age;
    this.isGreeted = false;
    // we can also add a method in our constructor
    this.greet = function(personToGreet){
        console.log(`Hello! I'm ${name}, nice to meet you ${personToGreet.name}`)
        // can we re-assign the value of the argument's property?
        // Yes. person4 is global and it was created with the 'let' keyword
        personToGreet.isGreeted = true;
    }
}
let person3 = new Person('Ayumi Kumagai', '1-2 Filinvest', 22)
let person4 = new Person('Maria Hwasa', '#12 Sampaloc Street', 24)

console.log(person3)
console.log(person4)

person3.greet(person4)
console.log(person4)

// array are special objects with methods that allows us to manipulate them.

let newArr = []
console.log(typeof newArr)

// Activity
/*
    [Scenario] Real World Application Objects
    1. We would to create a game that would have several pokemon interact with each other
    2. Every pokemon would have the same set of stats, properties, and function
*/

// Using object literals to create multiple kinds of pokemon would be time consuming

let myPokemon = {
    name: 'Pikachu',
    level: 3,
    health: 100,
    attack: 50,
    tackle: function(){
        console.log(`This pokemon tackled targetPokemon`);
        console.log(`targetPokemon's health is now reduced to _targetPokemonHealth_`)
    },
    faint: function(){
        console.log(`Pokemon Fainted`)
    }
}
console.log(myPokemon)

// create an object constructor instead will help with this process
function Pokemon(name, level){
    // properties
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level;
    // methods
    this.tackle = function(target){
        console.log(`${this.name} tackled ${target.name}`);
        console.log(`${target.name}'s health is now reduced to ${target.health}`);
    }
    this.faint = function(){
        console.log(this.name + "fainted.")
    }
}

// create new instances of the 'Pokemon' object each with their unique properties
let pikachu = new Pokemon('Pikachu', 16);
let rattata = new Pokemon('Rattata', 8);

pikachu.tackle(rattata)