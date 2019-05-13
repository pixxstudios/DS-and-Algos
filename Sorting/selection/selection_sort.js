"use strict";
exports.__esModule = true;
function SelectionSort(arr) {
    if (!arr.length)
        return [];
    if (arr.length === 1)
        return arr;
    var min = arr[0];
    var i = 1;
    for (i = 1; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[j] < min)
                min = arr[j];
        }
    }
    var temp = arr[i];
    arr[i] = min;
    min = temp;
    console.log(min, arr);
    return arr;
}
exports.SelectionSort = SelectionSort;
var data = [4, 8, 1, 90, 1, 77, 42];
console.log(SelectionSort(data));
