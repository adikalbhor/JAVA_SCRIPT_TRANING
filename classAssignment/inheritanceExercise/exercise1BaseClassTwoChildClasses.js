class Task {
    constructor(name) {
        this.name = name;
        this.status = "PENDING";
        this.notes = [];
    }

    start() {
        console.log(`  Starting: ${this.name}`);
        this.status = "IN_PROGRESS";
    }

    cancel(reason) {
        this.notes.push(reason);
        this.status = "CANCELLED";
        console.log(`  ✗ ${this.name} CANCELLED: ${reason}`);
    }

    complete() {
        this.status = "COMPLETED";
        console.log(`  ✓ ${this.name} COMPLETED`);
    }
}

class MeetingTask extends Task {
    constructor(name, location, room) {
        super(name);
        this.location = location;
        this.room = room;
    }

    arrive() {
        console.log(`    Arriving at: ${this.location}`);
    }

    enterRoom() {
        console.log(`    Entering: ${this.room}`);
    }

    start() {
        super.start();
        this.arrive();
    }
}

class RemoteTask extends Task {
    constructor(name, platform, duration = 20) {
        super(name);
        this.platform = platform;
        this.duration = duration;
    }

    connectCall() {
        console.log(`    Connecting via: ${this.platform}`);
        console.log(`    Expected duration: ${this.duration}min`);
    }

    start() {
        super.start();
        this.connectCall();
    }
}

console.log("Creating child class instances:\n");

const performanceReview = new MeetingTask(
    "Performance Review",
    "Conference Room B",
    "Room 204"
);

const onboardingCall = new RemoteTask(
    "Onboarding Call",
    "SecureVideo",
    30
);

console.log("Running meeting task:");
performanceReview.start();
performanceReview.enterRoom();
performanceReview.complete();

console.log("\nRunning remote task:");
onboardingCall.start();
onboardingCall.complete();

console.log("\nInheritance checks:");
console.log(
    `  performanceReview instanceof MeetingTask: ${
        performanceReview instanceof MeetingTask
    }`
);
console.log(
    `  performanceReview instanceof Task: ${
        performanceReview instanceof Task
    }`
);
console.log(
    `  performanceReview instanceof Object: ${
        performanceReview instanceof Object
    }`
);

console.log(
    `\n  onboardingCall instanceof RemoteTask: ${
        onboardingCall instanceof RemoteTask
    }`
);
console.log(
    `  onboardingCall instanceof Task: ${
        onboardingCall instanceof Task
    }`
);

const followUpSync = new MeetingTask(
    "Follow-up Sync",
    "Conference Room A",
    "Room 101"
);

console.log();
followUpSync.start();
followUpSync.cancel("Manager unavailable");

console.log("  notes:", followUpSync.notes);
console.log("  status:", followUpSync.status);

