// // Problem 12
// // a) Accepts array and returns array reversed
// function flipArray(arr) {
//     // declare new array
//     newArr = [];
//     // start at end of array and place that array in new list first
//     for(var i=arr.length-1; i>=0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(flipArray([1,2,3,4]));

/* b) Write function without declaring any new arrays. Function should flip the array parameter 
in place by swapping the posiiton of its elements.*/
function flipArray2(arr) {
    // Swap index position of elements
    for(var i=arr.length-1; i>=(arr.length/2); i--) {
        var originalNum = arr[arr.length-(i+1)];
        var lastNum = arr[i];
        arr[i] = originalNum;
        // arr[0]
        arr[arr.length-(i+1)] = lastNum;
    }
    // return flipped array
    return arr;
}

console.log(flipArray2([1,2,3,2,10,4,-1, -11, 10]));
