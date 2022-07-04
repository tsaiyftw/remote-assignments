/* method 1*/
function delayedResult(n1, n2, delayTime, callback) {
    let sum = n1 + n2;
    setTimeout(() => {
        callback(sum);
    }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
    console.log(result);
});
// 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
});

// 5 (-5+10) will be shown in the console after 2 seconds


/* method 2*/

function delayedResult(n1, n2, delayTime) {
    let sum = n1 + n2;
    setTimeout(() => {
        console.log(sum);
    }, delayTime)
};

delayedResult(5, 5, 5000)

delayedResult(6, 6, 6000)
