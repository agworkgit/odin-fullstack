// Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).

const leapYears = function (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    } else {
        return false;
    }
};

// not leap year
console.log('not leap');
console.log(leapYears(1800));
console.log(leapYears(1900));
console.log(leapYears(1997));
console.log(leapYears(700));
// leap year
console.log('leap');
console.log(leapYears(1996));
console.log(leapYears(1600));
console.log(leapYears(2000));
console.log(leapYears(1984));
console.log(leapYears(2004));


// Do not edit below this line
module.exports = leapYears;