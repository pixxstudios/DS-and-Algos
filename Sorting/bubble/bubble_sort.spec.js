const { BubbleSort } = require('./bubble_sort');

describe("Bubble sort", () => {
    it("handle empty array", () => {
        expect(BubbleSort([])).toEqual([]);
        expect(BubbleSort([])).not.toEqual([1]);
    });

    it("should sort [1000,7,21,6,8,793,99,9] array", () => {
        expect(BubbleSort([1000,7,21,6,8,793,99,9])).toEqual([6,7,8,9,21,99,793,1000]);
    });

    it("should sort [0, -99, 2, -1, -5, 10] array", () => {
        expect(BubbleSort([0, -99, 2, -1, -5, 10])).toEqual([-99, -5, -1, 0, 2, 10]);
    })
})