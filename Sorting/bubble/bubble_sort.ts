const BubbleSort = (arr: Array<number>): Array<number> => {
    for(let i = 0; i< arr.length; i++) {
        for( let j = i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const data: Array<number> = [4,8,1,90,1,77,42];
console.log(BubbleSort(data));

export { BubbleSort };