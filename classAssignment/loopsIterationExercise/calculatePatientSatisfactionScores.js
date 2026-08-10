// *Scenario:** Calculate statistics for a batch of patient satisfaction survey scores.
// **Requirements:**
// 1. Create an array called `satisfactionScores` with these values:
//    - 85, 92, 78, 95, 88, 73, 90, 87
// 2. Use a for loop to calculate:
//    - Total of all scores
//    - Average score
//    - Highest score (you'll need to track this as you loop)
//    - Lowest score (you'll need to track this as you loop)
// **Hint for finding highest/lowest:**
// ```javascript
// let highest = satisfactionScores[0];  // Start with first score
// for (let i = 1; i < satisfactionScores.length; i++) {
//     if (satisfactionScores[i] > highest) {
//         highest = satisfactionScores[i];
//     }
// }
// **Example Output:**
// Patient Satisfaction Analysis
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// Scores: [ 85, 92, 78, 95, 88, 73, 90, 87 ]
// Calculating statistics...
// Results:
//   Total: 688
//   Average: 86.0
//   Highest: 95
//   Lowest: 73
let satisfactionScores = [85, 92, 78, 95, 88, 73, 90, 87];
let totalScore = 0;
let averageScore = 0;
let highScore = satisfactionScores[0];
let lowScore = satisfactionScores[0];
for(let i=0;i<satisfactionScores.length;i++){
    if(satisfactionScores[i]>highScore){
        highScore = satisfactionScores[i];
    }
    totalScore +=satisfactionScores[i];
    if(satisfactionScores[i]<lowScore){
        lowScore = satisfactionScores[i];
    }
}
console.log("-----------------------------");
console.log(" Total Score is",totalScore);
console.log("-----------------------------");
console.log(" Highest Score is",highScore);
console.log("-----------------------------");
console.log(" Lowest Score is",lowScore);
console.log("-----------------------------");
console.log("Average Score is",(totalScore/satisfactionScores.length));
console.log("-----------------------------");

// Output
// -----------------------------
//  Total Score is 688
// -----------------------------
//  Highest Score is 95
// -----------------------------
//  Lowest Score is 73
// -----------------------------
// Average Score is 86
// -----------------------------