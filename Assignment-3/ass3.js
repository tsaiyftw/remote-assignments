function countAandB(input) {
    let ret = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] == 'a' || input[i] == 'b') {
            ret++;
        }
    }
    return ret;
}

function toNumber(input) {
    let ret = [];
    for (i = 0; i < input.length; i++) {
        ret.push(input[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1);
    }
    return ret;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]f