function SelectionSort(arr: Array<number>): Array<number> {

    if (!arr.length) return [];

    if(arr.length === 1) return arr;

    let min = arr[0];
    let i = 1;
    for(i = 1; i < arr.length; i++ ) {
        for(let j = i ; j < arr.length; j++) {
            if(arr[j] < min) min = arr[j];
        }
    }

    const temp = arr[i];
    arr[i] = min;
    min = temp;
    console.log(min, arr);

    return arr;
}

const data: Array<number> = [4,8,1,90,1,77,42];
console.log(SelectionSort(data));

export { SelectionSort };