function checkFeatureEnabled(flag) {
    if (flag) {
        console.log("Feature is ENABLED");
    } else {
        console.log("Feature is DISABLED");
    }
}

let featureA = true;
let featureB = false;
let featureC = new Boolean(false);

console.log("typeof featureC:", typeof featureC);
console.log("Boolean(featureC):", Boolean(featureC));

checkFeatureEnabled(featureA);
checkFeatureEnabled(featureB);

// Convert wrapper object to primitive boolean
checkFeatureEnabled(featureC.valueOf());

// Boolean(featureC): true
// Feature is ENABLED
// Feature is DISABLED
// Feature is DISABLED