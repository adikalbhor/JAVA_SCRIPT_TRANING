// Declare three variables for a patient record, each with an explicit type annotation:
// ```typescript
// // YOUR CODE HERE
// console.log("patientId:", patientId);
// console.log("admissionCount:", admissionCount);
// console.log("isAdmitted:", isAdmitted);
// // Expected output:
// // patientId: PT-2001
// // admissionCount: 2
// // isAdmitted: true
// Once it compiles, try uncommenting each of these one at a time and recompile — confirm the 
// compiler refuses each one:
// ```typescript
// // patientId = 42;
// // admissionCount = "two";
// // isAdmitted = null;

let patientId: string ="PT-2001";
let admissionCount: number =2;
let isAdmitted: boolean = true;

console.log("patientId:", patientId);
console.log("admissionCount:", admissionCount);
console.log("isAdmitted:", isAdmitted);

// patientId: PT-2001
// admissionCount: 2
// isAdmitted: true

// it throws error 
// patientId = 42;
// admissionCount = "two";
// isAdmitted = null;