"use strict";
// This is the exercise to slow down on. Write a function `printPatientRecord(person)` where `person` is 
// typed as `{ name: string; age: number }`, and have it print `` `${person.name}, age ${person.age}` ``.
// Then create a variable `admittedPatient` — **not** typed as matching `printPatientRecord`'s parameter,
//  just a plain object — with `name: "Ananya Iyer"`, `age: 29`, **and an extra field** `diagnosis:
//   "Fracture"`. Pass it to `printPatientRecord`.
// ```typescript
// function printPatientRecord(person: { name: string; age: number }): void {
//     // YOUR CODE HERE
// }
// const admittedPatient = {
//     name: "Ananya Iyer",
//     age: 29,
//     diagnosis: "Fracture"
// };
// console.log();
// printPatientRecord(admittedPatient);
// // Expected output:
// // Ananya Iyer, age 29
// Now do the same thing with two **completely unrelated** named types. Declare a
//  `type PatientSummary = { patientName: string; roomNumber: number }` — 
//  this is called a *type alias*: it just gives a name to a shape so you don't have to retype it 
//  everywhere. (Type aliases get their own full treatment in Topic 3 — for now, just know 
//  `type Name = { ... }` is how you name a shape.) Then write `printSummary(summary: PatientSummary)`,
//   create a `dischargeRecord` variable — with no type annotation at all — 
// that happens to have a matching `patientName`/`roomNumber` shape, and pass it in.
// ```typescri
// type PatientSummary = { patientName: string; roomNumber: number };
// function printSummary(summary: PatientSummary): void {
//     // YOUR CODE HERE
// }
// const dischargeRecord = { patientName: "Vikram Rao", roomNumber: 204 };
// printSummary(dischargeRecord);
// // Expected output:
// // Vikram Rao — Room 204
// `dischargeRecord` was never declared as a `PatientSummary` anywhere. Why does TypeScript accept it 
// anyway?
function printPatientRecord(person) {
    console.log(`${person.name}, age ${person.age}`);
}
const admittedPatient = {
    name: "Ananya Iyer",
    age: 29,
    diagnosis: "Fracture"
};
console.log();
printPatientRecord(admittedPatient);
function printSummary(summary) {
    console.log(`${summary.patientName} — Room ${summary.roomNumber}`);
}
const dischargeRecord = {
    patientName: "Vikram Rao",
    roomNumber: 204
};
printSummary(dischargeRecord);
// Expected output:
// Vikram Rao — Room 204
