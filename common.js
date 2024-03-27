// adding two number...
const add = (a, b) => {
    return a + b;
}
// check if number is even...
function isEven(number) {
    if (number < 0) throw new Error("Number must be positive");
    if (typeof number !== "number") throw new Error("Number must be a number");
    return number % 2 === 0;
}

// export the function for use it....
module.exports = {
    add,
    isEven
}