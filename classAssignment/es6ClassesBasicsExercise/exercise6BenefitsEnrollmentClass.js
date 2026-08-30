// ## Exercise 6 (Complex): BenefitsEnrollment Class (Managing a Collection of Objects)
// **Scenario:** The most advanced exercise here, a class that manages a whole collection of 
//   items, including adding, removing, and calculating a total. This uses array methods 
//     (`push`, `filter`, `reduce`) 
//    INSIDE class methods, still no inheritance or static, just more moving parts.
// **Requirements:**
// 1. Create a class called `BenefitsEnrollment` with a constructor that takes **no parameters** 
//     and just sets `this.selections = []`.
// 2. Add a method `addBenefit(name, cost)` that pushes `{ name: name, cost: cost }` into 
//   `this.selections`, and prints `"Added: <name> ($<cost>)"`.
// 3. Add a method `removeBenefit(name)` that removes the item with that name from `this.selections` 
//    (hint: `.filter()`), and prints `"Removed: <name>"`.
// 4. Add a method `getTotalCost()` that **returns** the sum of all selection costs currently 
//     enrolled (hint: `.reduce()`).
// 5. Add a method `listBenefits()` that prints `"Selected benefits:"` followed by each item as 
//     `"  - <name>: $<cost>"`.
// 6. Create an enrollment, add "Dental Plan" ($40), "Vision Plan" ($20), and "Health Plan" ($150). 
//     Remove "Vision Plan". 
//     List the remaining benefits, 
//     then print the total.
// **Example Output:**
// Added: Dental Plan ($40)
// Added: Vision Plan ($20)
// Added: Health Plan ($150)
// Removed: Vision Plan
// Selected benefits:
//   - Dental Plan: $40
//   - Health Plan: $150
// Total: $190
class BenefitsEnrollment{
    constructor(){
        this.selections=[];
    }
    addBenefit(name, cost){
        this.selections.push({
            name: name,
            cost: cost
        });
        console.log(`Added : ${name} ($ ${cost})`)
    }
    removeBenefit(name){
        this.selections = this.selections.filter(benefit => benefit.name !== name )
        console.log(`Removed: ${name}`);
    }
    getTotalCost(){
        return this.selections= this.selections.reduce((total, benefit) => total + benefit.cost, 0);
    }
    listBenefits(){
        console.log(`Selected benefits:`);
        this.selections.forEach(benefit => { console.log(`- ${benefit.name}: $${benefit.cost}`);
        });
    }   

}
const enrollment= new BenefitsEnrollment();
enrollment.addBenefit("Dental Plan", 40);
enrollment.addBenefit("Vision Plan",20);
enrollment.addBenefit("Health Plan",150);
enrollment.removeBenefit("Vision Plan");
enrollment.listBenefits();
console.log(`Total cost $ ${enrollment.getTotalCost()}`);
// Added : Dental Plan ($ 40)
// Added : Vision Plan ($ 20)
// Added : Health Plan ($ 150)
// Removed: Vision Plan
// Selected benefits:
// - Dental Plan: $40
// - Health Plan: $150
// Total cost $ 190