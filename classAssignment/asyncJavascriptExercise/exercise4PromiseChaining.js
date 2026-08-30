// ## Exercise 4: Promise Chaining
// When one async step depends on the result of the previous one, you chain `.then()` calls.
// Each `.then()` receives what the previous step resolved with, does its work, 
// and returns its own promise for the next step.
// `openPortal` is provided. Write the other three functions following the same pattern:
// ```javascript
// function openPortal() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("1. Portal opened");
//             resolve("Portal");
//         }, 500);
//     });
// }
//
// openPortal()
//     .then(portal  => loadEmployeeForm(portal))
//     .then(form    => fillEmployeeDetails(form))
//     .then(details => submitOnboarding(details))
//     .then(result  => console.log("Final: " + result))
//     .catch(error  => console.log("Error: " + error));
// // Expected output:
// // 1. Portal opened
// // 2. Form loaded
// // 3. Details filled
// // 4. Onboarding submitted
// // Final: Success

function openPortal() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1. Portal opened");
            resolve("Portal");
        }, 500);
    });
}
 function loadEmployeeForm(portal) {
    // YOUR CODE HERE — 500ms delay, print "2. Form loaded", resolve with "Form"
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("2. Form loaded");
            resolve("Form");
        },500);
    });
}

function fillEmployeeDetails(form) {
    // YOUR CODE HERE — 500ms delay, print "3. Details filled", resolve with "Details"
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("3. Details filled");
            resolve("Details");
        }, 500);
    });
}

function submitOnboarding(details) {
    // YOUR CODE HERE — 500ms delay, print "4. Onboarding submitted", resolve with "Success"
    return new Promise(resolve => {
        setTimeout(()=> {
            console.log("4. Onboarding submitted");
            resolve("Success");
        },500);
    });
}

openPortal()
    .then(portal  => loadEmployeeForm(portal))
    .then(form    => fillEmployeeDetails(form))
    .then(details => submitOnboarding(details))
    .then(result  => console.log("Final: " + result))
    .catch(error  => console.log("Error: " + error));

// 1. Portal opened
// 2. Form loaded
// 3. Details filled
// 4. Onboarding submitted
// Final: Success