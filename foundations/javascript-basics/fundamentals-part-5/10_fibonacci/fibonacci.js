const fibonacci = function(num) {
    if (num < 0) {
        return 'number cannot be lower than 0'
    } 
    if (num === 0) {
        return 0
    }

    let a = 1;
    let b = 0;
    
    for (let i = 2; i <= num; i++) {
        let current = a + b;
        b = a;
        a  = current
    }
    
    return a;

};
console.log(fibonacci(7));