// ## Exercise 4: Object Methods and 'this' Keyword
// **Scenario:** Create objects with methods to simulate a payroll run.
// **Requirements:**
// 1. Create an object called `payrollRun` with:
//    - name: "March Payroll"
//    - totalEmployees: 5
//    - processedEmployees: 0
// 2. Add these methods to the object:
//    - `start()` - prints "Running payroll: [name]"
//    - `process()` - increments processedEmployees and prints the count
//    - `getReport()` - prints a summary with completion rate
// 3. Call the methods to:
//    - Start the run
//    - Process 3 employees
//    - Generate the report
// 4. Create a second object `leaveRequest` with methods:
//    - `submit()` - sets status to "SUBMITTED" and records submit time
//    - `approve()` - sets status to "APPROVED" and calculates processing time
//    - `reject(reason)` - sets status to "REJECTED" with reason
//    - Properties: type, status, submitTime

// **Example Output:**
// Payroll Run with Methods
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// Running payroll: March Payroll
// ✓ Employee processed! Total: 1
// ✓ Employee processed! Total: 2
// ✓ Employee processed! Total: 3
// Payroll Report:
//   Name: March Payroll
//   Total employees: 5
//   Processed: 3 (60.0%)
//   Remaining: 2
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// Leave Request with Methods:
// ✓ Submitted: Sick Leave
//   Status: SUBMITTED
// ✓ Sick Leave APPROVED
//   Processing time: 0.05s
// **Hints:**
// - Use `this.propertyName` inside methods to access object properties
// - For processing time: `Date.now()` gives current time in milliseconds
// - Use `function() { }` syntax for methods, not arrow functions (for `this` to work)

let payrollRun ={
   name: "March Payroll",
   totalEmployees: 5,
   processedEmployees: 0,

   start :function(){
      console.log(`Running payroll: ${this.name}`);
   },

   process :function(){
      if(this.processedEmployees <= this.totalEmployees){
         this.processedEmployees ++;
         console.log(`Count of process is ${this.processedEmployees}`);
      }else{   
         console.log(" Count of process is not needed ");
      }
   },

   getReport :function(){
      const processCount = (this.processedEmployees/ this.totalEmployees)* 100;
      console.log("----Payroll Reoprt-----");
      console.log(`Total employess :${this.totalEmployees}`);
      console.log(`Process count : ${processCount}`);
      console.log(`Remaing count : ${this.totalEmployees - this.processedEmployees}`)
   }
};

payrollRun.start();
payrollRun.process();
payrollRun.process();
payrollRun.process();
payrollRun.getReport();
console.log(`---------------------------------------------------------------`);
//4. Create a second object `leaveRequest` with methods:
//    - `submit()` - sets status to "SUBMITTED" and records submit time
//    - `approve()` - sets status to "APPROVED" and calculates processing time
//    - `reject(reason)` - sets status to "REJECTED" with reason
//    - Properties: type, status, submitTime
// Leave Request with Methods:
// ✓ Submitted: Sick Leave
//   Status: SUBMITTED
// ✓ Sick Leave APPROVED
//   Processing time: 0.05s
// **Hints:**
// - Use `this.propertyName` inside methods to access object properties
// - For processing time: `Date.now()` gives current time in milliseconds
// - Use `function() { }` syntax for methods, not arrow functions (for `this` to work)

let leaveRequest = {
   starttime : null,
   endtime : null ,
   processtime : null,

   submit(){
      let reason = "SICK LEAVE"
      console.log("SUBMITTED :",reason)
      this.starttime = Date.now();
   },
   approve(){
      let status = "APPROVED";
      this.endtime = Date.now();
      this.processtime = this.starttime -this.endtime;
      console.log(`Status ${status} Process time ${this.processtime}`)
   },
   reject(resaon){
      console.log(`Leave is rejected beacuse ${resaon}`);
   }

};

leaveRequest.submit();
leaveRequest.approve();
leaveRequest.reject("Not appicable");

// Running payroll: March Payroll
// Count of process is 1
// Count of process is 2
// Count of process is 3
// ----Payroll Reoprt-----
// Total employess :5
// Process count : 60
// Remaing count : 2
// ---------------------------------------------------------------
// SUBMITTED : SICK LEAVE
// Status APPROVED Process time -1
// Leave is rejected beacuse Not appicable