// **Use these data types:**
// - Total tests (number)
// - Passed tests (number)
// - Failed tests (number)
// - Pass rate (number with decimal)
// - Test suite name (string)
// - All tests passed? (boolean)

let totalTestCases = 25;
let failedTestCases = 8;
let passedTestcases = totalTestCases-failedTestCases;
const testSuiteName = "Test Matrices Dash Board"
console.log("=================================================");
console.log("Test suite Name ",testSuiteName);
console.log("=================================================");
console.log("Total test cases are =",totalTestCases);
console.log("Passes test cases are =",passedTestcases);
console.log("Failed test cases are =",failedTestCases);
console.log("Pass rate = ",(passedTestcases/totalTestCases)*100);
if(totalTestCases === passedTestcases){
    console.log("All tests passed ");
}else {
    console.log("Some test cases are failed");
}
// OutPut
// =================================================
// Test suite Name  Test Matrices Dash Board
// =================================================
// Total test cases are = 25
// Passes test cases are = 17
// Failed test cases are = 8
// Pass rate =  68
// Some test cases are failed


