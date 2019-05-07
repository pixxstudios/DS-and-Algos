"use strict";
exports.__esModule = true;
var BubbleSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
exports.BubbleSort = BubbleSort;
var data = [4, 8, 1, 90, 1, 77, 42];
console.log(BubbleSort(data));
