// Declare `patientRecord` with an inline object type — `{ name: string; age: number }` — 
//   and assign it `{ name: "Ananya Iyer", age: 29 }`.
// ```typescript
// // YOUR CODE HERE
// console.log("\npatientRecord:", patientRecord);
// // Expected output:
// // patientRecord: { name: 'Ananya Iyer', age: 29 }

let  patientRecord: {name : string; age :number} = {
    name : "Ananya Iyer" ,
    age : 29
};

console.log("\npatientRecord:", patientRecord);
export{}; // 