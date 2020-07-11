let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const petsWithAge = pets.map(pet => pet.age = new Date().getFullYear() - pet.bornOn);
console.log(petsWithAge);

const dogs = pets.filter(pet => pet.type === "dog");
console.log(dogs);

const jasper = pets.find(pet => pet.name === "Jasper");
console.log(`Jasper is ${jasper.age} years old`);
