function SelectionSort(arr: Array<number>): Array<number> {

    if (!arr.length) return [];

    if(arr.length === 1) return arr;

    let min = arr[0];
    for(let i = 0; i < arr.length; i++ ) {

    }

    return arr;
}

const data: Array<number> = [4,8,1,90,1,77,42];
console.log(SelectionSort(data));

export { SelectionSort };