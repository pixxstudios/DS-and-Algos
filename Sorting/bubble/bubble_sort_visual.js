let arr;

function setup() {
    createCanvas(600, 300);
    arr = new Array(width);
    
    for(let i = 0 ; i < arr.length; i++)
        arr[i] = random(height);
}

function draw() {
    background(0);
    for(let i = 0 ; i < arr.length; i++) {
        stroke('yellow');
        line(i, height, i , height - arr[i]);
    }
}