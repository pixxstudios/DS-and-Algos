const BubbleSort = (arr: Array<number>): Array<number> => {
    for(let i = 0; i<arr.length; i++) {
        for( let j = 0; j<arr.length; j++) {
            console.log(arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const data: Array<number> = [4,8,1,90,1,77,42];
console.log(BubbleSort(data));

export { BubbleSort };