function doubleNumbers(arr) {
  let double = arr.map(n => {
    return n * 2;
  });
  return double;
}
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr) {
  let stringify = arr.map(n => {
    return n.toString();
  })
  return stringify;
}
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function capitalizeNames(arr) {
  let initialize = arr.map(name => {
    let split = name.toLowerCase().split('');
    let first = split[0].toUpperCase();
    let rest = split.slice(1).join('');
    let combined = first.concat(rest);
    return combined
  })
  return initialize;
}
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function namesOnly(arr){
  let names = arr.map(arr => {
    let fullName = arr.name;
    return fullName
  })
  return names;
}

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

function makeStrings(arr){
  let matrix = arr.map(arr => {
    if (arr.age > 18) {
      return `${arr.name} can go to the Matrix `
    }
    if (arr.age <= 18) {
      return `${arr.name} is underage!`
    }
  })
  return matrix;
}

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

function readyToPutInTheDOM(arr){
  let domReady = arr.map(arr => {
    return ` <h1>${arr.name}</h1><h2>${arr.age}</h2>`
  })
  return domReady

}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 