// ## Exercise 3 (Simple-Medium): LeaveBalance Class
// **Scenario:** Practice a class where methods **change** (mutate) a property over time,
//       plus a default parameter value and simple validation.
// **Requirements:**
// 1. Create a class called `LeaveBalance` with a constructor that accepts 
//       `employeeName` and `daysAvailable` (give `daysAvailable` a **default value of 0**).
// 2. Add a method `accrueLeave(days)` that adds `days` to `this.daysAvailable` and prints the 
//     new balance.
// 3. Add a method `requestLeave(days)` that:
//    - If `days` is more than the current balance, print `"Cannot request <days> days. 
//          Insufficient leave balance!"` and do nothing else.
//    - Otherwise, subtract `days` from `this.daysAvailable` and print the new balance.
// 4. Add a method `checkBalance()` that prints `"<employeeName> leave balance: <daysAvailable> days"`.
// 5. Create a balance for "Aisha Khan" starting with 20. Check the balance, accrue 5, request 10, 
//     then try to request 1000 (should fail).
// **Example Output:**
// Aisha Khan leave balance: 20 days
// Accrued 5 days. New balance: 25
// Used 10 days. New balance: 15
// Cannot request 1000 days. Insufficient leave balance!
class LeaveBalance{
    constructor(employeeName,daysAvailable){
        this.employeeName =employeeName;
        this.daysAvailable = daysAvailable;
    }
    accrueLeave(days){
        this.daysAvailable +=days;
        console.log(`Accrue ${days} days. New balance : ${this.daysAvailable}`);
    }

      requestLeave(days){
        if(days > this.daysAvailable){
            console.log(`Cannot request ${days} days.Insufficient leave balance!`);
        }else{
            this.daysAvailable -=days;
            console.log(`Used ${days} days. New Balance : ${this.daysAvailable}`);
        }
      }

      checkBalance(){
        console.log(`${this.employeeName} leave Balance : ${this.daysAvailable} days`);
      }
}

const balance =new LeaveBalance("Aisha Kan", 20);
balance.checkBalance();
balance.accrueLeave(5);
balance.requestLeave(10);
balance.requestLeave(1000);

// output
// Aisha Kan leave Balance : 20 days
// Accrue 5 days. New balance : 25
// Used 10 days. New Balance : 15
// Cannot request 1000 days.Insufficient leave balance!