// **Scenario:** Print each claim status in order, and show how index position relates to array position.
// **Requirements:**
// 1. Create an array called `claimStatuses` with these 4 values:
//    - "Filed"
//    - "Under Review"
//    - "Approved"
//    - "Rejected"
// 2. Print each value using its index (`claimStatuses[0]`, `claimStatuses[1]`, etc.),
//  labeled with its position (1st, 2nd, 3rd, 4th)
// 3. Print a small table showing position, index, and value lined up, similar to the zero-indexed 
// visualization from class
// **Example Output:**
// Claim Statuses
// First (index 0): Filed
// Second (index 1): Under Review
// Third (index 2): Approved
// Fourth (index 3): Rejected
// Position:  1st          2nd            3rd          4th
// Index:     0            1              2            3

let claimStatuses = [ "Filed","Under Review","Approved","Rejected"];
let j=0
console.log("_______________________________________________________");
for(let i=0;i<claimStatuses.length;i++){
    console.log("| ","Position ",j = (i+1)," | ", "Index ",i," | "," Value ",claimStatuses[i]," |");
}
console.log("________________________________________________________");

// Output
// |  Position  1  |  Index  0  |   Value  Filed  |
// |  Position  2  |  Index  1  |   Value  Under Review  |
// |  Position  3  |  Index  2  |   Value  Approved  |
// |  Position  4  |  Index  3  |   Value  Rejected  |
// ________________________________________________________