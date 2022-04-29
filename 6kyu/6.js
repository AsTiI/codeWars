// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
//     Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    let arr = words.split(" ");
    for (let i = arr.length - 1; i > 0; i--) {
        for (let b = 0; b < i; b++) {
            if (arr[b].match(/\d{1,3}/)[0] > arr[b+1].match(/\d{1,3}/)[0]) {
                let unit = arr[b];
                arr[b] = arr[b + 1];
                arr[b + 1] = unit;
            }
        }
    }
    return words = arr.join(" ")
}

console.log(order("is2 Thi1s T4est 3a"))