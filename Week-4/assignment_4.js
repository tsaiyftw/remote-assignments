function delayedResultPromise(n1, n2, delayTime) {
    let sum = n1 + n2
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sum);
        }, delayTime);
    });
};

delayedResultPromise(4, 5, 3000).then(console.log);
//9 (4+5) will be shown in the console after 3 seconds


async function main() {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    const result = await delayedResultPromise(4, 9, 7000)
    console.log(result)
}
main(); // result will be shown in the console after <delayTime> seconds