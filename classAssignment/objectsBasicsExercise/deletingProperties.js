// ## Exercise 5: Deleting Properties
// **Scenario:** Clean up temporary fields from an employee record before archiving it.
// **Requirements:**
// 1. Create an object `employeeRecord` with:
//    - employeeId: "EMP-101"
//    - department: "Sales"
//    - tempNote: "temporary"
//    - debugInfo: "some debug data"
// 2. Print the object before cleanup
// 3. Use `delete` to remove:
//    - tempNote
//    - debugInfo
// 4. Print the object after cleanup
// 5. Use the `in` operator to check if `tempNote` still exists
// **Example Output:**
// Archive Employee Record
// ━━━━━━━━━━━━━━━━━━━━━━━━━
// Before cleanup:
// {
//   employeeId: 'EMP-101',
//   department: 'Sales',
//   tempNote: 'temporary',
//   debugInfo: 'some debug data'
// }
// After cleanup:
// {
//   employeeId: 'EMP-101',
//   department: 'Sales'
// }
// Does 'tempNote' exist? false
// Does 'employeeId' exist? true
// ✓ Record ready to archive!

let employeeRecord = {
    employeeId: "EMP-101",
    department: "Sales",
    tempNote: "temporary",
    debugInfo: "some debug data"
    
    
};
    let emp =[];
    emp.push(employeeRecord);
    console.log("---Object Before Cleanup ")
    for(let i=0;i<emp.length;i++){
        console.log(`
            employeeID  ${emp[i].employeeId} 
            department : ${emp[i].department}
            Temp Note ${emp[i].tempNote} 
            Debug info : ${emp[i].debugInfo}
        `);

    }
    // for( let emprod of employeeRecord){
    //     console.log(`employeeID  ${emprod.employeeId} department : ${emprod.department} Temp Note ${emprod.tempNote} Debug info : ${emprod.debugInfo}`);
    // }
<<<<<<< HEAD
    // employeeRecord
=======
    
    console.log("------After deleted the objects ----------");
    delete employeeRecord.tempNote;
    delete employeeRecord.debugInfo;

    console.log(employeeRecord);
    console.log(`Does 'tempNote' exist? ${'tempNote' in employeeRecord}`);
>>>>>>> e1bd0a2c1cb073f966ebd171a9471f0c0ca8db4a
