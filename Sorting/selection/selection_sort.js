"use strict";
exports.__esModule = true;
function SelectionSort(arr) {
    if (!arr.length)
        return [];
    if (arr.length === 1)
        return arr;
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
    }
    return arr;
}
exports.SelectionSort = SelectionSort;
var data = [4, 8, 1, 90, 1, 77, 42];
console.log(SelectionSort(data));
