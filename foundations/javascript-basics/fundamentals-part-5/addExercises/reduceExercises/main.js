function total(arr) {
    let total = arr.reduce((total, num) => {
        return total + num;
    }, 0)
    return total
}
//  console.log(total([1,2,3])); 

function stringConcat(arr) {
    let result = arr.reduce((acc, num) => {
        return acc + num;
    }, "")
    return result
}
//  console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
    let voters = arr.reduce((accumulator, arr) => {
        if (arr.voted === true) {
            accumulator++
        }
        return accumulator
    }, 0);
    return voters;
};

//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
    let result = arr.reduce((acc, arr) => {
        return acc + arr.price;
    }, 0);
    return result
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
//  console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    return arr.flat();
};

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//  console.log(flatten(arrays)); 

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

// console.log(voters[1].voted);

function voterResults(arr) {
    let result = arr.reduce((acc, voter) => {
        vote = voter.voted
        if (acc[vote]) {
            acc[vote]++
        } else {
            acc[vote] = 1;
        }
        return acc[vote]
    })
    return result
}
// console.log(voterResults(voters));

