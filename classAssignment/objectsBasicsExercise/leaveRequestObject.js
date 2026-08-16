// **Scenario:** Create a structured leave request object.
// **Requirements:**
// 1. Create an object called `leaveRequest` with these properties:
//    - id: "LR-001"
//    - type: "Sick Leave"
//    - status: "PENDING"
//    - days: 2
// 2. Print each property using dot notation
// 3. Add a new property `approver` with value "Priya Sharma"
// 4. Modify the `status` to "APPROVED"
// 5. Print the complete object

let leaveRequest ={ 
     id :"LR-001",
     type : "Sick Leave",
     status :"PENDING",
     days : 2
};

console.log("2. Print each property using dot notation");
console.log("ID is :- ",leaveRequest.id)

console.log("Type of Leave is :- ",leaveRequest.type);

console.log("Status of leave is :- ",leaveRequest.status);

console.log("Total Days of leave is :- ",leaveRequest.days);

leaveRequest.approver= "Priya Sharma";
console.log("3. Add a new property `approver` with value Priya Sharma");
console.log("Approver for leave is :- ",leaveRequest.approver);

console.log("3. Modify the status to APPROVED");
leaveRequest.status="APPROVED"
console.log("Updated leave status is :- ",leaveRequest.status);

// 2. Print each property using dot notation
// ID is :-  LR-001
// Type of Leave is :-  Sick Leave
// Status of leave is :-  PENDING
// Total Days of leave is :-  2
// 3. Add a new property `approver` with value Priya Sharma
// Approver for leave is :-  Priya Sharma
// 3. Modify the status to APPROVED
// Updated leave status is :-  APPROVED