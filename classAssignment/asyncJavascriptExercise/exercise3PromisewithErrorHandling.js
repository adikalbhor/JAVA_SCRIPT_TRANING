// ow write a promise that can either succeed or fail, and use `.catch()` to handle the failure case without crashing.
// Write `authenticateEmployee(employeeId, pin)` that returns a promise. Use `setTimeout` for 
// a 500ms delay. 
// Resolve with `"Login successful"` if the credentials are `EMP-001` / `1234`, 
// reject with `"Invalid credentials"` otherwise.
// javascript
// function authenticateEmployee(employeeId, pin) {
//     return new Promise(function(resolve, reject) {
//         // YOUR CODE HERE
//     });
// }
// authenticateEmployee("EMP-001", "1234")
//     .then(message => console.log("✓ " + message))
//     .catch(error  => console.log("✗ " + error));
// authenticateEmployee("EMP-001", "0000")
//     .then(message => console.log("✓ " + message))
//     .catch(error  => console.log("✗ " + error));
// Expected output:
// ✓ Login successful
// ✗ Invalid credentials

authenticateEmployee()