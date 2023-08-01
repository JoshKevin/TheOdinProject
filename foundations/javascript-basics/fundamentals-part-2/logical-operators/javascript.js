let password = "password";
let pass;
let currentUser = prompt("Who's there?");
if (currentUser == null || currentUser == "") {
    alert("Canceled!")
} else if (!(currentUser === "admin")) {
    alert("I don't know you!")
} else if (currentUser === "admin") {
    pass = prompt("Password?");
    if (pass == null || pass == "") {
        alert("Canceled!")
    } else if (!(pass === password)) {
        alert("Wrong Password!") 
    } else if (pass == password) {
        alert("Welcome!")
    }
}
console.log(currentUser)
console.log(pass)