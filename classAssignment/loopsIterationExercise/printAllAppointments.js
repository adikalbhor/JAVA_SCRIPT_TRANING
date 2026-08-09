// ## Exercise 1: Print All Appointments
// **Scenario:** Display all appointments on today's clinic schedule with numbering.
// **Requirements:**
// 1. Create an array called `appointments` with these values:
//    - "Annual checkup"
//    - "Dental cleaning"
//    - "Eye exam"
//    - "Vaccination"
//    - "Blood test"
// 2. Use a for loop to print each appointment with:
//    - Appointment number (starting from 1, not 0!)
//    - Appointment name
// **Example Output:**
// Today's Clinic Schedule
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. Annual checkup
// 2. Dental cleaning
// 3. Eye exam
// 4. Vaccination
// 5. Blood test
// Total appointments: 5
let appointments = ["Annual checkup","Dental cleaning","Eye exam","Vaccination","Blood test"];
let counter = 0;
console.log("=====================================");
console.log("Sr.No","  ","Appointment")
for(let i=0;i<appointments.length;i++){
    console.log(i +1,". ", appointments[i])
}
console.log("=====================================");

// Output
// =====================================
// Sr.No    Appointment
// 1 .  Annual checkup
// 2 .  Dental cleaning
// 3 .  Eye exam
// 4 .  Vaccination
// 5 .  Blood test
// =====================================
console.log("=====================================");
console.log("===REFACORING OF FOR LOOP===");
console.log("=====================================");
console.log("Sr.No","  ","Appointment")
let i=0;
for(let appointment of appointments){
    console.log(i +1,". ", appointment)
    i++
}
console.log("=====================================");
console.log("Total Appointment is ",i);
console.log("=====================================");

// Total output
// =====================================
// Sr.No    Appointment
// 1 .  Annual checkup
// 2 .  Dental cleaning
// 3 .  Eye exam
// 4 .  Vaccination
// 5 .  Blood test
// =====================================
// =====================================
// ===REFACORING OF FOR LOOP===
// =====================================
// Sr.No    Appointment
// 1 .  Annual checkup
// 2 .  Dental cleaning
// 3 .  Eye exam
// 4 .  Vaccination
// 5 .  Blood test
// =====================================
// Total Appointment is  5
// =====================================