// **Scenario:** Create your very first class, just a constructor and one method.
// **Requirements:**
// 1. Create a class called `Employee` with a constructor that accepts `name` and `department`, and stores them as `this.name` and `this.department`.
// 2. Add a method `displayInfo()` that prints: `Name: <name>, Department: <department>`
// 3. Create TWO different `Employee` objects and call `displayInfo()` on each.
// **Example Output:**
// Name: Aisha Khan, Department: Engineering
// Name: Raj Verma, Department: Sales

class Employee{
    constructor(name ,department){
        this.name = name;
        this.department = department;
    }

    display(){
        console.log(`Name is :- ${this.name} And Department is :- ${this.department} `);
    } 
}
const employee1 = new Employee("Aisha khan" , " Engineering");
const employee2 = new Employee("Raj Verma","Sales");

employee1.display();
employee2.display();
//Out put
// Name is :- Aisha khan And Department is :-  Engineering 
// Name is :- Raj Verma And Department is :- Sales 