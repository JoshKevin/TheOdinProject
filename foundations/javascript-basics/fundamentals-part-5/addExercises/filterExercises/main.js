function fiveAndGreaterOnly(arr) {
    let filtered = arr.filter(num => {
        return num > 5;
    })
    return filtered;
  }
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

function evensOnly(arr) {
    let filtered = arr.filter(num => {
        return (num % 2 === 0);
    })
    return filtered

  }
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  function fiveCharactersOrFewerOnly(arr) {
    let filtered = arr.filter(word => {
        return (word.length <= 5)
    })
    return filtered
  }
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); \

function peopleWhoBelongToTheIlluminati(arr){
    let filtered = arr.filter(arr => {
        return arr.member === true;
    })
    return filtered;
  }
  // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));

function ofAge(arr){
    let filtered = arr.filter(arr => { 
        return arr.age >= 18;
    })
    return filtered
  }
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 
  