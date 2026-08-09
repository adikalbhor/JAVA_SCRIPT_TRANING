//  Create a variable for test status
// - Show how it changes during test execution
// - Create variables for test details (test name, step number, etc.)
// - Print the flow as it progresses

const testName = "Login Page Verification";
let testerName = "Aditya";
let testStatus = "IN PROGRESS";
let testCondition = "Test Started..";

const user1LoginID = "adi@gmail.com";
const user1Password = "Adi@123";

let totalTestTime = 2.35 ;
let steps = 0;

console.log("=======",testCondition,"=========");
console.log("Test Name :",testName);
console.log("Tester :",testerName);
console.log( );
testCondition = "Open URL"
console.log("Step",steps += 1,": ",testCondition);
console.log("Status : ",testStatus );
console.log( );
testCondition = "Navigate to Login In Page."
console.log("Step",steps += 1,": ",testCondition);
console.log("Status : ",testStatus );
console.log( );
testCondition = "Enter Credentials Login ID"
console.log("Step",steps += 1,": ",testCondition);
console.log("Username :",user1LoginID)
console.log("Status : ",testStatus );
console.log( );
testCondition = "Enter Credentials Password "
console.log("Step",steps += 1,": ",testCondition);
console.log("Username :",user1Password)
console.log("Status : ",testStatus );
console.log( );
testCondition = "Click on Login Button "
console.log("Step",steps += 1,": ",testCondition);
console.log("Status : ",testStatus );
console.log( );
testCondition = "User Sucessfully Logged In ";
testStatus = "Test Completed";
console.log("Step",steps += 1,": ",testCondition);
console.log("Status : ",testStatus);
console.log();
console.log("============================================");
testStatus = "Completed";
console.log("Final Status :",testStatus);
console.log("Test Duration :",totalTestTime,"sec");
console.log("============================================");

// Out Put 
// ======= Test Started.. =========
// Test Name : Login Page Verification
// Tester : Aditya

// Step 1 :  Open URL
// Status :  IN PROGRESS

// Step 2 :  Navigate to Login In Page.
// Status :  IN PROGRESS

// Step 3 :  Enter Credentials Login ID
// Username : adi@gmail.com
// Status :  IN PROGRESS

// Step 4 :  Enter Credentials Password 
// Username : Adi@123
// Status :  IN PROGRESS

// Step 5 :  Click on Login Button 
// Status :  IN PROGRESS

// Step 6 :  User Sucessfully Logged In 
// Status :  Test Completed

// ============================================
// Final Status : Completed
// Test Duration : 2.35 sec
// ============================================
