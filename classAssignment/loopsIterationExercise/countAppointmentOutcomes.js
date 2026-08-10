// ## Exercise 2: Count Appointment Outcomes
// **Scenario:** Analyze a day's appointment outcomes and generate statistics.
// **Requirements:**
// 1. Create an array called `appointmentStatuses` with these values:
//    - "COMPLETED", "COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"
// 2. Use a for loop to count:
//    - Total appointments
//    - COMPLETED appointments
//    - CANCELLED appointments
//    - RESCHEDULED appointments
// 3. Calculate and print:
//    - Completion rate (percentage)
//    - Cancellation rate (percentage)
// **Example Output:**
// Appointment Outcomes
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// Counting outcomes...
// Statistics:
//   Total appointments: 8
//   Completed: 5 ✓
//   Cancelled: 2 ✗
//   Rescheduled: 1 ⊘
//   Completion rate: 62.5%
//   Cancellation rate: 25.0%

let appointmentStatuses = ["COMPLETED", "COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"];

let completeappointment = 0;
let canceledappointment =0;
let rescheduledappointment =0 ;
console.log("-----------------------------------------------")
console.log("Total appointment is",appointmentStatuses.length);
console.log("-----------------------------------------------");
for(let appointmentStatuse of appointmentStatuses){
    if(appointmentStatuse === "COMPLETED"){
        completeappointment ++;
    }else if(appointmentStatuse === "CANCELLED"){
        canceledappointment ++;
    }else{
        rescheduledappointment ++;
    }
}
console.log("-----------------------------------------------")
console.log("Completed appointment is",completeappointment);
console.log("-----------------------------------------------");
console.log("Cancelled appointment is",canceledappointment);
console.log("-----------------------------------------------");
console.log("Rejected appointment is",rescheduledappointment);
console.log("-----------------------------------------------");
console.log("Completion rate is",(completeappointment/appointmentStatuses.length)*100,"%");
console.log("-----------------------------------------------");
console.log("Cancelled rate is",(canceledappointment/appointmentStatuses.length)*100,"%");
console.log("-----------------------------------------------");

// Output
// Completed appointment is 5
// -----------------------------------------------
// Cancelled appointment is 2
// -----------------------------------------------
// Rejected appointment is 1
// -----------------------------------------------
// Completion rate is 62.5 %
// -----------------------------------------------
// Cancelled rate is 25 %
// -----------------------------------------------