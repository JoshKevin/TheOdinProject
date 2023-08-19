function sumAll(a, b) {
    result = 0;
    if (a < 0 || b < 0) return "ERROR"
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    for (let i = a; i <= b; i++) {
        // console.log(i);
        result = result + i;
        // console.log(result)

    }
    return result;
}
