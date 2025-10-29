const repeatString = function (string, num) {
    let result = [];
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            result.push(string);
        }
        return result.join("");
    } else {
        return "ERROR";
    }
};

console.log(repeatString("bob", -2));

// Do not edit below this line
module.exports = repeatString;
