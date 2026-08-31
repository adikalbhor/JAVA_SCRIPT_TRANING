class EmployeeRecord {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }

    access() {
        console.log(`  Accessing record for ${this.employeeName}`);
    }
}

class DigitalRecord extends EmployeeRecord {
    constructor(employeeName, system) {
        super(employeeName);
        this.system = system;
    }

    connectSystem() {
        console.log(`  Connecting to ${this.system} system`);
    }
}

class SecureRecord extends DigitalRecord {
    constructor(employeeName, system, encrypted = true) {
        super(employeeName, system);
        this.encrypted = encrypted;
    }

    secureLink() {
        console.log(
            `  Establishing secure link (encrypted: ${this.encrypted})`
        );
    }
}

console.log("\nMulti-level inheritance:");
console.log("  SecureRecord → DigitalRecord → EmployeeRecord → Object");

const ashaRecord = new SecureRecord(
    "Aisha Khan",
    "PeopleHub",
    true
);

console.log("\ninstanceof checks:");
console.log(
    `  ashaRecord instanceof SecureRecord: ${
        ashaRecord instanceof SecureRecord
    }`
);
console.log(
    `  ashaRecord instanceof DigitalRecord: ${
        ashaRecord instanceof DigitalRecord
    }`
);
console.log(
    `  ashaRecord instanceof EmployeeRecord: ${
        ashaRecord instanceof EmployeeRecord
    }`
);
console.log(
    `  ashaRecord instanceof Object: ${
        ashaRecord instanceof Object
    }`
);

console.log("\nAccessing the record:");
ashaRecord.secureLink();
ashaRecord.connectSystem();
ashaRecord.access();