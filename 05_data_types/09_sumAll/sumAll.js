const sumAll = function (start, end) {
    let check = (Number.isInteger(start)) && (Number.isInteger(end)) && (start >= 0) && (end >= 0);

    if (check) {
        if (start < end) {
            let result = 0;
            for (let i = start; i <= end; i++) {
                result += i;
            }
            return result;
        } else if (end < start) {
            let result = 0;
            for (let i = end; i <= start; i++) {
                result += i;
            }
            return result;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

// 1 + 2 + 3 + 4 = 10 // correct