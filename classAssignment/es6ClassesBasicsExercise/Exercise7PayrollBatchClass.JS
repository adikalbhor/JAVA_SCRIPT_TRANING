class PayrollBatch {
    name = "Unnamed Batch";
    entries = [];
    #accessCode = "secret-code-98765";
    #processingLog = [];

    constructor(name) {
        this.name = name;
    }

    addEntry(employeeName){
        this.entries.push(employeeName);    
        this.#log(`Added entry: ${employeeName}`);
    }

    // Private method
    #log(message) {
    const entryNumber = this.#processingLog.length + 1;
    this.#processingLog.push(`[Entry #${entryNumber}] ${message}`);
    }

    getlog() {
        return this.#processingLog;
    }

    run(){
        console.log(`Running the batch: ${this.name}`);
        this.entries.forEach((employee, index) => {
            console.log(`  Processing entry #${index + 1}: ${employee}`);
            this.#log(`Processed entry: ${employee}`);
        });
    }

}

const payrollBatch = new PayrollBatch("March Payroll");
payrollBatch.addEntry("Aisha Khan");
payrollBatch.addEntry("Raj Verma");
payrollBatch.addEntry("Meera Nair");
payrollBatch.run();
// Print processing log
console.log("\n Processing log:");
for(const logEntry of payrollBatch.getlog()){
    console.log(`${logEntry}`);
}
// Show public fields are accessible
console.log("\n Public fields are accessible:");
console.log(` batch.name: ${payrollBatch.name}`);
console.log(` batch.entries: ${payrollBatch.entries}`);
// output:
// Running the batch: March Payroll
//   Processing entry #1: Aisha Khan
//   Processing entry #2: Raj Verma
//   Processing entry #3: Meera Nair

//  Processing log:
// [Entry #1] Added entry: Aisha Khan
// [Entry #2] Added entry: Raj Verma
// [Entry #3] Added entry: Meera Nair
// [Entry #4] Processed entry: Aisha Khan
// [Entry #5] Processed entry: Raj Verma
// [Entry #6] Processed entry: Meera Nair

//  Public fields are accessible:
//  batch.name: March Payroll
//  batch.entries: Aisha Khan,Raj Verma,Meera Nair