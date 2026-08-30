console.log("=== Exercise 1: Predict the typeof Output ===\n");

let a = "APPROVED";
let b = new String("APPROVED");

let c = 42;
let d = new Number(42);

let e = true;
let f = new Boolean(true);

console.log("Expected: string");
console.log(typeof a); // primitive string

console.log("Expected: object");
console.log(typeof b); // String wrapper object

console.log("Expected: number");
console.log(typeof c); // primitive number

console.log("Expected: object");
console.log(typeof d); // Number wrapper object

console.log("Expected: boolean");
console.log(typeof e); // primitive boolean

console.log("Expected: object");
console.log(typeof f); // Boolean wrapper object




// Expected: string
// string
// Expected: object
// object
// Expected: number
// number
// Expected: object
// object
// Expected: boolean
// boolean
// Expected: object
// object