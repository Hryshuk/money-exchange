// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    const coins = new Map([
        ["H", 50],
        ["Q", 25],
        ["D", 10],
        ["N", 5],
        ["P", 1]
    ]);
    let object = {};

    if (currency > 10000) {
        object.error = "You are rich, my friend! We don't have so much coins for exchange";
        return object;
    }
    if (currency > 0) {
        coins.forEach ((value, key) => {
            let count = Math.floor(currency / value);
            if (count) {
                object[key] = count;
                currency = currency % value;
            }
        });
    }
    return object;
}
