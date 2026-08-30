// Declare the same three kinds of variables again — a string, a number, and a boolean — 
// but this time **without** writing any type annotation at all:
// ```typescript
// // YOUR CODE HERE
// console.log("\nward:", ward, "| vitalsCount:", vitalsCount, "| isCritical:", isCritical);
// // Expected output:
// // ward: cardiology | vitalsCount: 5 | isCritical: false
// Hover over `ward` in VS Code — what type does it show, even though you never wrote the word `string` 
// anywhere? Then try `ward = 42;` on the next line and recompile — does it fail the same way Exercise 
// 1's explicit annotation did?

let ward ="cardiology";
let vitalsCount = 5 ;
let isCritical = false;

console.log("\nward:", ward, "| vitalsCount:", vitalsCount, "| isCritical:", isCritical);

// ward = 42 ; // error is trown