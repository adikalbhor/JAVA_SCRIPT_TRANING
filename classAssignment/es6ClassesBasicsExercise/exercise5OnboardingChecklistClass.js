// # Exercise 5 (Medium-Complex): OnboardingChecklist Class
// **Scenario:** A class that models something closer to real HR work, tracking a status and a 
// list of tasks.
// **Requirements:**
// 1. Create a class called `OnboardingChecklist` with a constructor that accepts `employeeName`,
//    and also sets:
//    - `this.status = "PENDING"` (default starting status, no parameter)
//    - `this.tasks = []` (empty array, no parameter)
// 2. Add a method `addTask(task)` that pushes `task` into `this.tasks`.
// 3. Add a method `run()` that:
//    - Prints `"Starting onboarding: <employeeName>"`
//    - Loops through `this.tasks` and prints each one as `"  Task <number>: <task>"` 
//      (starting from Task 1, not Task 0)
//    - Sets `this.status = "COMPLETED"` at the end
// 4. Add a method `getSummary()` that **returns** the string: `"<employeeName> - <status> 
//     (<number of tasks> tasks)"`
// 5. Create an `OnboardingChecklist` for "Priya Singh", add 3 tasks 
//   ("Complete HR paperwork", "Set up email account", "IT equipment handover"), run it,
//      then print the summary.
// **Example Output:**
// Starting onboarding: Priya Singh
//   Task 1: Complete HR paperwork
//   Task 2: Set up email account
//   Task 3: IT equipment handover
// Priya Singh - COMPLETED (3 tasks)

class OnboardingChecklist{
    constructor(employeeID){
        this.employeeID=employeeID;
        this.status = "PENDING" ;
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
    run(){
        console.log(`Starting onboarding: ${this.employeeID}`);
        let i=1;
        for(let tas of this.tasks){
            console.log(`Task ${i}: ${tas}`);
            i++;
        }
        this.status = "Completed";
    }
    getSummary(){
        console.log(`${this.employeeID} - ${this.status} ( ${this.tasks.length} )`)
    }
}
const member =new OnboardingChecklist("Priya Singh");
member.addTask("Complete HR paperwork");
member.addTask("Set up email account");
member.addTask("IT equipment handover");
member.run();
member.getSummary();

// OutPut
// Starting onboarding: Priya Singh
// Task 1: Complete HR paperwork
// Task 2: Set up email account
// Task 3: IT equipment handover
// Priya Singh - Completed ( 3 )