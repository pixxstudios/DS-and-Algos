const { SelectionSort } = require('./selection_sort');

describe("Selection sort", () => {
    it("handle empty array", () => {
        expect(SelectionSort([])).toEqual([]);
        expect(SelectionSort([])).not.toEqual([1]);
    });

    it("check for single element", () => {
        expect(SelectionSort([99])).toEqual([99]);
        expect(SelectionSort([1])).not.toEqual([0]);
    });

    it("should sort [1000,7,21,6,8,793,99,9] array", () => {
        expect(SelectionSort([1000,7,21,6,8,793,99,9])).toEqual([6,7,8,9,21,99,793,1000]);
    });

    it("should sort [0, -99, 2, -1, -5, 10] array", () => {
        expect(SelectionSort([0, -99, 2, -1, -5, 10])).toEqual([-99, -5, -1, 0, 2, 10]);
    })
})