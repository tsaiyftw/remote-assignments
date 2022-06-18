function count(input) {
    dic = {};
    for ( let i of input){
        if ( i in dic){
            dic[i] += 1;
        }
        else {
            dic[i] = 1;
        }
    }
    return dic 
    }
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    dic = {}
    for (let i in input){
        let data  = input[i];
        let k = data.key;
        let v = data.value;
        if (k in dic) {
            dic[k] += v
        }
        else {
            dic[k] = v
        }
    }
    return dic 
    }
let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
    ];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}