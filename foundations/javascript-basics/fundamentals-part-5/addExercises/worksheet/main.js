const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
// Get an array of all names
// mapNames = characters.map(arr => {
//     return arr.name
// })
// console.log(mapNames)

// Get an array of all heights
// mapHeights = characters.map(arr => {
//     return arr.height
// })
// console.log(mapHeights)

// Get an array of objects with just name and height properties
// mapNamesHeights = characters.map(arr => {
//     return `${arr.name}, ${arr.height}`
// })
// console.log(mapNamesHeights)

// Get an array of all first names
// firstName = characters.map(arr => {
//     let name = arr.name;
//     [first, ...rest] = name.split(" ")
//     return first;
// })
// console.log(firstName);


//Filter
// Get characters with mass greater than 100
charGreater100 = characters.filter(person => {
    return (person.mass > 100);
})
// console.log(charGreater100);

// Get characters with height less than 200
charLess200 = characters.filter(person => {
    return person.height < 200
})
// console.log(charLess200);

// Get all male characters
charMale = characters.filter(character => {
    return character.gender === 'male'
})
// console.log(charMale);

// Get all female characters
charFemale = characters.filter(character => {
    return character.gender === 'female'
})
// console.log(charFemale);

//SORT
// Sort by name
sortName = characters.sort((a, b)=> {
     if(a.name > b.name) {
        return 1
     } else {
        return -1
     };
})
// console.log(sortName)

// Sort by mass
sortMass = characters.sort((a, b) => {
    if(a.mass < b.mass) {
        return 1
     } else {
        return -1
     };
})
// console.log(sortMass);
// Sort by height
sortHeight = characters.sort((a, b) => {
    if(a.height < b.height) {
        return 1
     } else {
        return -1
     };
})
// console.log(sortHeight);

// Sort by gender
sortGender = characters.sort((a, b) => {
    if(a.gender < b.gender) {
        return 1
     } else {
        return -1
     };
})
console.log(sortGender);
