function assertStatusMatch(expected, actual) {
    if (String(expected) === String(actual)) {
        console.log("✅ Status matches: " + String(actual));
    } else {
        console.log(
            "❌ Status mismatch! Expected: " +
            expected +
            ", Got: " +
            actual
        );
    }
}

// Case 1
let status1 = "APPROVED";
let status2 = "APPROVED";
assertStatusMatch(status1, status2);

// Case 2
let status3 = "APPROVED";
let status4 = new String("APPROVED");

console.log("typeof status3:", typeof status3);
console.log("typeof status4:", typeof status4);

assertStatusMatch(status3, status4);

// Case 3
let status5 = new String("APPROVED");
let status6 = new String("APPROVED");

assertStatusMatch(status5, status6);

// typeof status3: string
// typeof status4: object
// ✅ Status matches: APPROVED
// ✅ Status matches: APPROVED