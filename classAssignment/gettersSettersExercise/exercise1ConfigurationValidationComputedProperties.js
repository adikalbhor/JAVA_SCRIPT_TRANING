class TeamConfiguration {
    constructor() {
        this._meetingDuration = 30;
        this._reminderCount = 2;
        this._defaultDepartment = "general";
    }

    // Getter
    get meetingDuration() {
        console.log(`  Getting meeting duration: ${this._meetingDuration}min`);
        return this._meetingDuration;
    }

    // Setter with validation
    set meetingDuration(value) {
        if (value < 10) {
            console.log("  ❌ Meeting too short! Minimum is 10min");
            this._meetingDuration = 10;
        } else if (value > 120) {
            console.log("  ❌ Meeting too long! Maximum is 120min");
            this._meetingDuration = 120;
        } else {
            console.log(`  ✓ Setting meeting duration to: ${value}min`);
            this._meetingDuration = value;
        }
    }

    get reminderCount() {
        return this._reminderCount;
    }

    set reminderCount(value) {
        if (value < 0) {
            console.log("  ❌ Reminder count cannot be negative!");
            this._reminderCount = 0;
        } else if (value > 5) {
            console.log("  ⚠️  Too many reminders! Setting to maximum: 5");
            this._reminderCount = 5;
        } else {
            console.log(`  ✓ Setting reminder count to: ${value}`);
            this._reminderCount = value;
        }
    }

    // Computed property
    get meetingDurationInHours() {
        return this._meetingDuration / 60;
    }

    // Read-only property
    get defaultDepartment() {
        return this._defaultDepartment.toUpperCase();
    }
}

console.log("Creating team configuration:\n");

const config = new TeamConfiguration();

console.log("Using getters (looks like property access):");
console.log(`  config.meetingDuration = ${config.meetingDuration}`);
console.log(
    `  config.meetingDurationInHours = ${config.meetingDurationInHours}h`
);
console.log(`  config.defaultDepartment = ${config.defaultDepartment}`);

console.log("\nUsing setters (looks like assignment):");
config.meetingDuration = 45;
console.log(`  After setting: ${config.meetingDuration}`);

console.log("\nSetter validation in action:");
config.meetingDuration = 5;
console.log(`  Actual meeting duration: ${config.meetingDuration}`);

config.meetingDuration = 300;
console.log(`  Actual meeting duration: ${config.meetingDuration}`);

console.log("\nReminders with validation:");
config.reminderCount = 3;
config.reminderCount = -1;
config.reminderCount = 10;

console.log("\nRead-only property:");
console.log(`  config.defaultDepartment: ${config.defaultDepartment}`);

config.defaultDepartment = "sales"; // ignored (no setter)
console.log(
    "  config.defaultDepartment = 'sales' would fail silently (no setter)"
);

