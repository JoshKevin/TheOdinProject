// Rewrite the function using '?' or '||'
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }


//using ternary operator ?

// function checkAge(age){
//     return (age > 18) ? true: confirm('Did your parents allow you?')
// };

function checkAge(age) {
    return (age > 18) || confirm('Did your parents allow you?');
}
