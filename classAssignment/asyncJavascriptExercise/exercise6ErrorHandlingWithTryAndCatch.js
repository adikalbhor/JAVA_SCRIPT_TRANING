// When you use `await`, a rejected promise behaves just like a thrown error - it jumps straight to the 
// `catch` block. This is one of the main reasons async/await is nicer than `.then()/.catch()` chains.

// async function testWithErrorHandling(shouldFail) {
//     // YOUR CODE HERE — try/catch, await processReimbursement, print ✓ or ✗
// }
// testWithErrorHandling(false);   // should succeed
// testWithErrorHandling(true);    // should fail
// // Expected output:
// // ✓ Operation succeeded!
// // ✗ Operation failed!

function processReimbursement(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject("Operation failed!");
            else            resolve("Operation succeeded!");
        }, 500);
    });
}

async function testWithErrorHandling(shouldFail) {
    // YOUR CODE HERE — try/catch, await processReimbursement, print ✓ or ✗
    try{
        const result = await processReimbursement(shouldFail);
        console.log("✓ " + result);
    }catch(error){
        console.log("X " + error);
    }
}

testWithErrorHandling(false);   // should succeed
testWithErrorHandling(true); 

// ✓ Operation succeeded!
// X Operation failed!