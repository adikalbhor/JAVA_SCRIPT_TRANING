// **Scenario:** Store premium payment amounts and calculate values using `.length`.
// **Requirements:**
// 1. Create an array called `premiumAmounts` with these 4 values:
//    - 450, 620, 380, 900
// 2. Calculate and print:
//    - Total number of premium amounts
//    - First amount
//    - Last amount (using `.length - 1`, not a hard-coded index)
//    - Second-to-last amount (using `.length - 2`)
// **Example Output:**
// Premium Amounts
// Amounts: [ 450, 620, 380, 900 ]
// Total amounts: 4
// First amount: 450
// Last amount: 900
// Second-to-last amount: 380
let premiumAmounts =[450,620,380,900];
let total = 0;
console.log("================================");
for(let i=0;i<premiumAmounts.length;i++){
    total = total + premiumAmounts[i];
    if(i===0){
        console.log("Firsr amount is ",premiumAmounts[i]);
        console.log("================================");
    }else if(i === premiumAmounts.length-1){
        console.log(" Last amount is ",premiumAmounts[i]);
        console.log("================================");
    }else if(i === premiumAmounts.length-2){
        console.log(" Second-to-last amount is ",premiumAmounts[i]);
        console.log("================================");
    }
}

console.log("Total premium amount is ",total);
console.log("=================================");
console.log("Total number of premium amounts is ",premiumAmounts.length);
console.log("=================================");

// Output
// Firsr amount is  450
// ================================
//  Second-to-last amount is  380
// ================================
//  Last amount is  900
// ================================
// Total premium amount is  2350
// =================================
// Total number of premium amounts is  4
// =================================