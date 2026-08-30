// ## Exercise 4 (Medium): TeamMemberScores Class (Property That Starts as an Empty Array)
// **Scenario:** Practice a property that starts empty and grows over time, 
//     plus a method that computes something from that array.
// **Requirements:**
// 1. Create a class called `TeamMemberScores` with a constructor that accepts `name` and `employeeId`,
//     and also sets `this.performanceScores = []` (an empty array, no parameter needed for this one).
// 2. Add a method `addScore(score)` that pushes `score` into `this.performanceScores`.
// 3. Add a method `getAverageScore()` that returns the average of all scores in `this.performanceScores`
//    (return `0` if there are no scores yet, to avoid dividing by zero).
// 4. Create a `TeamMemberScores` for "Raj Verma" (employee id "E101"), add scores 80, 90, and 70, 
//  then print the average.
// **Example Output:**
// Raj Verma average score: 80

class TeamMemberScores{
    constructor(name,employeeId){
        this.name=name;
        this.employeeId=employeeId;
        this.performanceScores=[];
    }
    addScore(score){
        this.performanceScores.push(score);
    }

    getAverageScore(){
        let Tvalue=0;
        for(let value of this.performanceScores){
            Tvalue+= value;
        }
         if(this.performanceScores.length === 0){
            return 0;
        }else{
            return(Tvalue /this.performanceScores.length);
        }
    }
}

const memberScores =new TeamMemberScores("Raj Verma","E101");
memberScores.addScore(80);
memberScores.addScore(90);
memberScores.addScore(70);
console.log(`${memberScores.name} average score ${memberScores.getAverageScore()}`)

// output
// Raj Verma average score 80