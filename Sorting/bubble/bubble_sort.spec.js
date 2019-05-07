const { BubbleSort } = require('./bubble_sort');

describe("Bubble sort", () => {
    it("handle empty array", () => {
        expect(BubbleSort([])).toEqual([]);
        expect(BubbleSort([])).not.toEqual([1]);
    })
})