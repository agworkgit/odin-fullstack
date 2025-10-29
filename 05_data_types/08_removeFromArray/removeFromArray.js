const removeFromArray = function (array, ...values) {
    // the value could be an array or string
    // the function should be able to remove multiple values
    // [1, 4] or "1, 4"

    // iterating through values
    for (let i = 0; i < values.length; i++) {
        if (Array.isArray(values[i])) {
            let [dist] = [...values];
            let filter = array.filter(item => !dist.includes(item));
            return filter;
        } else {
            let filter = array.filter(item => !values.includes(item));
            return filter;
        }
    }
};

console.log(removeFromArray([20, 'hey', 12], [20, 'ho']));
console.log(removeFromArray([20, 'hey', 12], 20, 'ho'));

// Do not edit below this line
module.exports = removeFromArray;
