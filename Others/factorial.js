"use strict";
exports.__esModule = true;
var factorial = function (num) {
    if (num > 0)
        return num * factorial(num - 1);
    else
        return 1;
};
exports.factorial = factorial;
console.log(factorial(8));
