// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you must
// multiply the digits in num until you reach a single digit.

function persistence(num) {
    let count = 0;
    for(; num > 9; count++){
        num = num.toString().split('').reduce(function(previousValue, currentValue) {
            return previousValue * currentValue;
        })
    }
    return count
}

console.log(persistence(39))