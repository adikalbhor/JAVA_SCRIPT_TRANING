class TaskOutcome {
    constructor(name) {
        this.name = name;
        this._startTime = null;
        this._endTime = null;
        this.status = "PENDING";
    }

    // Computed duration property
    get duration() {
        if (this._startTime === null || this._endTime === null) {
            return 0;
        }

        return (this._endTime - this._startTime) / 1000;
    }

    // Computed boolean property
    get completed() {
        return this.status === "COMPLETED";
    }

    // Computed boolean property
    get cancelled() {
        return this.status === "CANCELLED";
    }

    start() {
        this._startTime = Date.now();
        this.status = "IN_PROGRESS";
        console.log(`  Started: ${this.name}`);
    }

    complete() {
        this._endTime = Date.now();
        this.status = "COMPLETED";
        console.log(
            `  ✓ ${this.name} completed in ${this.duration.toFixed(2)}s`
        );
    }

    cancel() {
        this._endTime = Date.now();
        this.status = "CANCELLED";
        console.log(
            `  ✗ ${this.name} cancelled after ${this.duration.toFixed(2)}s`
        );
    }
}

console.log("Task outcome with computed properties:");

const performanceReview = new TaskOutcome("Performance Review");
performanceReview.start();
performanceReview.complete();

console.log(`\n  Completed? ${performanceReview.completed}`);
console.log(`  Cancelled? ${performanceReview.cancelled}`);

console.log("\nA cancelled task:");

const followUpSync = new TaskOutcome("Follow-up Sync");
followUpSync.start();
followUpSync.cancel();

console.log(`  Completed? ${followUpSync.completed}`);
