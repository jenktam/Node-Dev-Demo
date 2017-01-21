// Add function
// var scores = [90, 98, 89, 100, 100, 86, 94];   
// var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];  //total = 678

// function add(nums) {
//     var total = 0;
//     nums.forEach(function(num) {
//         total += num;
//     });
//     return total;
// }

// console.log(add(scores));
// console.log(add(scores2));


function addSimple(num1, num2) {
    var total = num1 + num2;
    return total;
}

console.log("num1 + num2 added!");
console.log(addSimple(15, 10));

// Subtract function
// num 1 minus num 2
function subtract(num1, num2) {
    var total = num1 - num2;
    return total;
}

console.log("num1 minus num2 subtracted!");
console.log(subtract(100, 10));

// Multiply function
function multiply(num1, num2) {
    return num1 * num2;
}

console.log("num1 times num2");
console.log(multiply(5,6));

// Divide function
// num1 is divided by num2
function divide(num1, num2) {
    var avg = num1/num2;
    return avg;
}

console.log("num1 divided by num2");
console.log(divide(100,10));

// Reverse function
var arr = [1,2,3,4];

function reverse(nums) {
    var newArr = [];
    for(var i = nums.length - 1; i >= 0; i--) {
        newArr.push(nums[i]);
    }
    return newArr;
}

console.log("reversed numbers");
console.log(reverse(arr));

// // Insert function. Takes a sorted array of numbers and inserts new number keeping the array sorted. return new array
// // [1, 2, 2, 4, 7] pass in 5. new array = [1, 2, 2, 4, 5, 7]


// var arr = [1, 2, 2, 4, 7];

// function sortedInsert(nums, newNum) {
//     var newArr = [];
//     // iterate through array
//     for(var i = 0; i < nums.length; i++) {
//         // check if new num less than any numbers in array
//         if(newNum < nums[i]) {
//             if(newNum > nums[i-1]) {
//                 // if newNum < existing number, place newNum before that one.
//                 newArr.push(newNum);
//             }
//             newArr.push(nums[i]);
//         }
//         // Include numbers in array if they are less than newNum
//         else {
//             newArr.push(nums[i]);
//         }
//     }
//     return newArr;
// }


var arr = [1, 2, 2, 4, 7];

function sortedInsert(nums,newNum) {
    var newArr = [];
    var i = 0;
    // for the first element [i=0]
    if(newNum <= nums[0]) {
        newArr.push(newNum);
    }
    
    if(nums[0] !== undefined) {
        newArr.push(nums[0]);
    }
    
    for(var i = 1; i < nums.length; i++) {
        // for all numbers after the first
        if(newNum <= nums[i] && newNum > nums[i-1]) {
            newArr.push(newNum);
        }
        newArr.push(nums[i]);
    }
    
    // for the last number
    if(newNum > nums[nums.length - 1]) {
        newArr.push(newNum);
    }
    
    // if no numbers in array
    if(nums.length === 0) {
        newArr.push(newNum);
    }
    return newArr;
}

function sortArray(unsortedArray){
    // create new sorted array
    var sortedArray = [];
    // return new array
    for(var i = 0; i < unsortedArray.length; i++) {
        sortedArray = sortedInsert(sortedArray,unsortedArray[i]);
    }
    return(sortedArray);
}

function sortedInsertsByRyan(nums,newNum){
    var newArr = nums.slice();
    for(var i=0;i<nums.length;i++){
        if(newNum<nums[i]){
            newArr.splice(i,0,newNum);
            return(newArr);
        }
    }
    newArr.push(newNum);
    return(newArr);
}

console.log("sortedInsert Array:");
console.log(sortedInsert([], 91));

console.log(sortArray([6,2,-21,76,2,3,43,2342,345,4,54,35,3]));