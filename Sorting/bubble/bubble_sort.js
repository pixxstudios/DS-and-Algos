"use strict";
exports.__esModule = true;
var BubbleSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            console.log(arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
exports.BubbleSort = BubbleSort;
var data = [4, 8, 1, 90, 1, 77, 42];
console.log(BubbleSort(data));
