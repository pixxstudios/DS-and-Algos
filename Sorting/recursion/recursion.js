const arr = [8, 3, 5, 8, 9, 0, 1, 2];

// sorting logic
function sort(arr) {
    let len = arr.length;

    if (len === 2) {
        if (arr[0] > arr[1]) {
            arr[0] = arr[0] + arr[1];
            arr[1] = arr[0] - arr[1];
            arr[0] = arr[0] - arr[1]
        }
        return arr;
    }
   // else sort(arr[0, len/2]);
    // console.log(arr.splice(-1));
    // return arr;
}

// console.log(sort(arr));

for(let i = 0; i<=5 ; i++){
    setTimeout(function() {
        console.log("i = ", i);
    }, 1000);
}
