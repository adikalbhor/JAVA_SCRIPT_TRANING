// A promise represents a value that will be available in the future. 
// The executor function you pass to `new Promise(...)` does the work, 
// then calls `resolve` on success or `reject` on failure.
// Write `runAsyncRequest(requestType)` that returns a new Promise. 
// Inside, use `setTimeout` to simulate a 1-second delay, then resolve with a result object.
// ```javascript
// function runAsyncRequest(requestType) {
//     // YOUR CODE HERE — return a new Promise
// }
// runAsyncRequest("Expense Claim")
//     .then(function(result) {
//         console.log("Result: " + result.status);
//     });
// // Expected output (after 1 second):
// // Result: APPROVED

function runAsyncRequest(requestType) {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve({
            type: requestType,
            status: "APPROVED"
        });
        }, 1000);
    });   
};
runAsyncRequest("Expense Claim")
    .then(function(result) {
    console.log("Result: " + result.status);
});