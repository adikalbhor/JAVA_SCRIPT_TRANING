class HRUtils {
  static DEPARTMENTS = {
    GENERAL: "general",
    SALES: "sales",
    ENGINEERING: "engineering",
  };

  static DEFAULT_SETTINGS = {
    meetingDuration: 30,
    reminderCount: 2,
  };

  static getDepartmentConfig(
    department = "general",
    remindersEnabled = true
  ) {
    console.log(`  Generating config for: ${department}`);

    return {
      department,
      remindersEnabled,
      settings: HRUtils.DEFAULT_SETTINGS,
    };
  }

  static isValidDepartment(department) {
    return Object.values(HRUtils.DEPARTMENTS).includes(department);
  }

  static getDepartments() {
    return Object.values(HRUtils.DEPARTMENTS);
  }
}

console.log("HR utility class with static methods:");
console.log(
  "  Supported departments:",
  HRUtils.getDepartments()
);

console.log("\n  Validating departments:");
console.log(
  `    "sales" valid? ${HRUtils.isValidDepartment("sales")}`
);
console.log(
  `    "marketing" valid? ${HRUtils.isValidDepartment("marketing")}`
);

console.log("\n  Getting config:");
const salesConfig = HRUtils.getDepartmentConfig("sales", false);

console.log(`    Department: ${salesConfig.department}`);
console.log(
  `    Reminders enabled: ${salesConfig.remindersEnabled}`
);
console.log(
  `    Meeting duration: ${salesConfig.settings.meetingDuration}min`
);

//  Generating config for: sales
//     Department: sales
//     Reminders enabled: false
//     Meeting duration: 30min