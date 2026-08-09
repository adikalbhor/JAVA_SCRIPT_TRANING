/*
console.log("Status before declaration: " + testStatus);
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);

// Output for var :-
// Status before declaration: undefined
// Status after declaration: PASSED

console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
// OutPut :-
// let testStatus = "PASSED";
//     ^

// SyntaxError: Identifier 'testStatus' has already been declared

if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);
// Output :- 
// Inside block: admin@test.com
// Outside block: admin@test.com

if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);
// OutPut
// console.log("Outside block: " + tempUser);
//                                 ^

// ReferenceError: tempUser is not defined

for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);  
// Out Put
// Running test step 0
// Running test step 1
// Running test step 2
// After loop, i = 3


for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);  
//OutPut
// console.log("After loop, i = " + i);  
//                                  ^

// ReferenceError: i is not defined

*/
console.log("=========Code with correct let and const ==================");
console.log("=========Example 1==================");
let testStatus = "Throws Error";
console.log("Status before declaration: " + testStatus);
testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);

console.log("=============Example 2==================");
let tempUser = "admin@test.com";
if (true) {
    console.log("Inside block: " + tempUser);
}
tempUser = "Throws Error"
console.log("Outside block: " + tempUser);
console.log("=============Example 3==================");
let i = 0;
for (i; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i); 

// =========Code with correct let and const ==================
// =========Example 1==================
// Status before declaration: Throws Error
// Status after declaration: PASSED
// =============Example 2==================
// Inside block: admin@test.com
// Outside block: Throws Error
// =============Example 3==================
// Running test step 0
// Running test step 1
// Running test step 2
// After loop, i = 3