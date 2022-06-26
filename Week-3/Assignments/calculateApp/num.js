app.get(("/Data"), (req, res) => {
    const { number } = req.query;
    if (!number) {
        res.send("Lack of parameter");
    }
    else {
        if (isNaN(number)) {
            res.send("Not an integer");
        }
        else {
            if (number.includes(".")) {
                res.send("Not an integer");
            }
            let n = parseInt(number);
            if (n < 0) {
                res.send("Not a positive number");
            }
            else {
                let sum = (n + 1) * n / 2;
                res.send(sum);
            }
        }
    }
});

