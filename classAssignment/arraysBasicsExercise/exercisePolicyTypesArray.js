// Print the following:
//    - The complete array
//    - Total number of policy types
//    - The first policy type
//    - The last policy type (use `.length`, not a hard-coded index!)

let policyTypes = ["Auto",
    "Home",
    "Life",
    "Health"
];
console.log("=================================================");
console.log("Types of Policy are ",policyTypes);

console.log("=================================================");
console.log("Total number of Policy Type are ",policyTypes.length);

 console.log("=================================================");
for(let i=0; i<policyTypes.length;i++){
    if(i === 0){
        console.log("First Policy Type is ",policyTypes[i]);
        console.log("-----------------------------");
    }else if(i === (policyTypes.length-1)){
        console.log("Last Policy Type is ",policyTypes[i]);
        console.log("------------------------------");
    }
}

console.log("=================================================");

// Output
// =================================================
// Types of Policy are  [ 'Auto', 'Home', 'Life', 'Health' ]
// =================================================
// Total number of Policy Type are  4
// =================================================
// First Policy Type is  Auto
// -----------------------------
// Last Policy Type is  Health
// ------------------------------
// =================================================