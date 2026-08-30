// ## Exercise 2 (Simple): OfficeSpace Class
// **Scenario:** Practice adding methods that **return** a calculated value instead of just printing.
// **Requirements:**
// 1. Create a class called `OfficeSpace` with a constructor that accepts `lengthFt` and `widthFt`.
// 2. Add a method `calculateFloorArea()` that **returns** `lengthFt * widthFt`.
// 3. Add a method `calculateWallPerimeter()` that **returns** `2 * (lengthFt + widthFt)`.
// 4. Create one `OfficeSpace` object (length 5, width 3) and print both results.
// **Example Output:**
// Area: 15
// Perimeter: 16

class OfficeSpace{
    constructor(lengthFT,widthFT){
        this.lengthFT =lengthFT;
        this.widthFT =widthFT;
    }

    calculateFloorArea(){
        return (this.lengthFT*this.widthFT);
    }

    calculateWallPerimeter(){
        return 2 * (this.lengthFT + this.widthFT);
    }
    
}
const office =new OfficeSpace(5,3);
console.log(`Area is :- ${office.calculateFloorArea()}`);
console.log(`Perimeter is :- ${office.calculateWallPerimeter()}`);
// Output
// Area is :- 15
//Perimeter is :- 16