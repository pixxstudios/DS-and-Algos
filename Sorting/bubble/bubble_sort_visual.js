let arr;
let i = 0;
let j = 0;

function setup() {
    createCanvas(600, 300);
    arr = new Array(width);
    
    for(let i = 0 ; i < arr.length; i++)
        arr[i] = random(height);    
}

function draw() {
    background(0);

    let a = arr[j];
    let b = arr[j+1];

    if (a > b) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
    }

    j++;

    if(i < arr.length) {
        if( j >= arr.length-i-1) {
            j = 0;
            i++;
        }
    }
    
    for(let i = 0 ; i < arr.length; i++) {
        stroke('yellow');
        line(i, height, i , height - arr[i]);
    }
}