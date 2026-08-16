// ## Exercise 2: Employee Records
// **Scenario:** Create multiple employee objects.
// **Requirements:**
// 1. Create 3 employee objects with these properties:
//    - employeeId
//    - department
//    - role
// 2. Store all 3 employees in an array called `employees`
// 3. Loop through the array and print each employee's details
// 4. Count how many employees have role "Manager" vs "Associate"

let employee1 ={
    employeeID : 101,
    dempartment : "ER&D",
    role : "Manager"
};

let employee2 ={
    employeeID : 201,
    dempartment : "Cloud",
    role : "Associate"
};

let employee3 ={
    employeeID : 301,
    dempartment : "HR",
    role : "Associate"
};

let employees = [];
employees.push(employee1,employee2,employee3);
console.log("2. Store all 3 employees in an array called employees")
console.log(employees);
console.log("3. Loop through the array and print each employee's details");
let countMag =0;
let countAss =0;
for(let i=0;i<employees.length;i++){
    console.log("-------------------------------------------------------------------");
    console.log("Employee ID :- ",employees[i].employeeID,"  Demapertment :- ",employees[i].dempartment," Role :- ",employees[i].role);
    if(employees[i].role === "Manager"){
        countMag ++;
    }else {
        countAss ++;
    }
}

console.log("Count of employees having role of Manager or an Associate")
console.log("Total Managers are :-  ",countMag," Total Associate are :- ",countAss);

// 2. Store all 3 employees in an array called employees
// [
//   { employeeID: 101, dempartment: 'ER&D', role: 'Manager' },
//   { employeeID: 201, dempartment: 'Cloud', role: 'Associate' },
//   { employeeID: 301, dempartment: 'HR', role: 'Associate' }
// ]
// 3. Loop through the array and print each employee's details
// -------------------------------------------------------------------
// Employee ID :-  101   Demapertment :-  ER&D  Role :-  Manager
// -------------------------------------------------------------------
// Employee ID :-  201   Demapertment :-  Cloud  Role :-  Associate
// -------------------------------------------------------------------
// Employee ID :-  301   Demapertment :-  HR  Role :-  Associate
// Count of employees having role of Manager or an Associate
// Total Managers are :-   1  Total Associate are :-  2