// Node Exercise 2

// Set original total
var scores = [90, 98, 89, 100, 100, 86, 94];             //total = 657
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];  //total = 678

function average(scores) {
    //Add all scores together
    var total = 0;
    scores.forEach(function(score) {
        total += score;
    });
    // Divide by total number of scores
    var avg = total/scores.length;
    // Round Average
    return Math.round(avg);
}

console.log("Average score for environmental science");
console.log(average(scores));

console.log("Average score for organic chemistry");
console.log(average(scores2));



