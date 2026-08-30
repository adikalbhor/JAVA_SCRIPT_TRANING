// A callback is just a function you pass to another function so it can be called later with a result.
//   Before promises existed, this was how all async code in JavaScript was written - and you'll still 
//   see it in older code.
// Write `submitLeaveRequest(leaveType, callback)` so that it:
// 1. Prints `"Submitting: " + leaveType`
// 2. Creates a result object with `type`, `status: "APPROVED"`, and `days`
// 3. Calls `callback` with that result
// ```javascript
// function submitLeaveRequest(leaveType, callback) {
//     // YOUR CODE HERE
// }
// submitLeaveRequest("Sick Leave", function(result) {
//     console.log("Request completed: " + result.type);
//     console.log("Status: " + result.status);
// });
// // Expected output:
// // Submitting: Sick Leave
// // Request completed: Sick Leave
// // Status: APPROVED
// Once that works, try a bonus version that uses `Math.random()` to make the status 70% APPROVED / 30% REJECTED.

function submitLeaveRequest(leaveType, callback) {
//     // YOUR CODE HERE
}