// ## Exercise 4: Find Cancelled Appointments

// **Scenario:** Identify and report all cancelled appointments from a day's schedule.

// **Requirements:**
// 1. Create two parallel arrays:
//    - `appointmentTypes`: ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"]
//    - `appointmentOutcomes`: ["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"]

// 2. Use a for loop to:
//    - Print all appointment outcomes
//    - Find and print ONLY the cancelled appointments with their types
//    - Count total cancellations

// **Example Output:**
// ```
// Daily Appointment Report
// ━━━━━━━━━━━━━━━━━━━━━━━━━

// All Appointments:
//   1. Checkup: COMPLETED ✓
//   2. Dental: CANCELLED ✗
//   3. Eye Exam: COMPLETED ✓
//   4. Vaccination: CANCELLED ✗
//   5. Blood Test: COMPLETED ✓
//   6. Follow-up: CANCELLED ✗

// Cancelled Appointments (need rebooking):
//   - Dental
//   - Vaccination
//   - Follow-up

// Total cancellations: 3
// ```

// ---
let appointmentTypes = ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"];
let appointmentOutcomes =["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"]
console.log("-------All Appointments-------");
let totalCancelCount =0 ;
let cancelCountName = [];
for(let i=0;i<appointmentTypes.length;i++){
    console.log(i," ",appointmentTypes[i],": ",appointmentOutcomes[i])
    if(appointmentOutcomes[i]==="CANCELLED"){
        totalCancelCount++;
        cancelCountName.push(appointmentTypes[i]);
    }
}
console.log("---------------------------------")
console.log("Total cancel count is ",totalCancelCount);
console.log("---------------------------------")
console.log("Cancel appointment type are ",cancelCountName)
// //console.log(appointmentOutcomes)
// Output
// -------All Appointments-------
// 0   Checkup :  COMPLETED
// 1   Dental :  CANCELLED
// 2   Eye Exam :  COMPLETED
// 3   Vaccination :  CANCELLED
// 4   Blood Test :  COMPLETED
// 5   Follow-up :  CANCELLED
// ---------------------------------
// Total cancel count is  3
// ---------------------------------
// Cancel appointment type are  [ 'Dental', 'Vaccination', 'Follow-up' ]