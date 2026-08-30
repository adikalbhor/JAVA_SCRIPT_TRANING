class TaskTracker {
  static totalAssigned = 0;
  static completedCount = 0;
  static cancelledCount = 0;

  constructor(name) {
    this.name = name;
    this.status = "PENDING";
  }

  run(succeeds) {
    console.log(`  Running: ${this.name}`);

    TaskTracker.totalAssigned++;

    if (succeeds) {
      this.status = "COMPLETED";
      TaskTracker.completedCount++;
    } else {
      this.status = "CANCELLED";
      TaskTracker.cancelledCount++;
    }

    console.log(`    Result: ${this.status}`);
  }

  static getCompletionRate() {
    if (TaskTracker.totalAssigned === 0) {
      return "0";
    }

    return (
      (TaskTracker.completedCount / TaskTracker.totalAssigned) *
      100
    ).toFixed(1);
  }

  static printReport() {
    console.log("\n  📊 Task Report:");
    console.log(`    Total: ${TaskTracker.totalAssigned}`);
    console.log(`    Completed: ${TaskTracker.completedCount}`);
    console.log(`    Cancelled: ${TaskTracker.cancelledCount}`);
    console.log(
      `    Completion Rate: ${TaskTracker.getCompletionRate()}%`
    );
  }

  static createUrgent(name) {
    console.log(`  Factory: Creating urgent task "${name}"`);
    return new TaskTracker(`[URGENT] ${name}`);
  }

  static reset() {
    TaskTracker.totalAssigned = 0;
    TaskTracker.completedCount = 0;
    TaskTracker.cancelledCount = 0;

    console.log("  Reset all task counters");
  }
}

console.log("Running tasks with static tracking:");

const task1 = new TaskTracker("Performance Review");
const task2 = new TaskTracker("Onboarding Call");
const task3 = new TaskTracker("Benefits Enrollment");

task1.run(true);
task2.run(false);
task3.run(true);

console.log("\nAccessing static properties:");
console.log(`  TaskTracker.totalAssigned: ${TaskTracker.totalAssigned}`);
console.log(`  TaskTracker.completedCount: ${TaskTracker.completedCount}`);

console.log("\nCalling static methods:");
TaskTracker.printReport();

console.log("\nUsing static factory method:");
const urgentTask = TaskTracker.createUrgent("Payroll Correction");
urgentTask.run(true);

TaskTracker.printReport();

TaskTracker.reset();
console.log(
  `  TaskTracker.totalAssigned after reset: ${TaskTracker.totalAssigned}`
);

//    Cancelled: 1
//     Completion Rate: 75.0%
//   Reset all task counters
//   TaskTracker.totalAssigned after reset: 0