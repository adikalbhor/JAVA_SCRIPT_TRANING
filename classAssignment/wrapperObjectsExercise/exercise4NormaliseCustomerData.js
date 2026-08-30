function normaliseEmail(input) {
    return String(input).trim().toLowerCase();
}

function normaliseUsername(input) {
    let username = String(input).trim().toLowerCase();

    if (username.startsWith("@")) {
        username = username.slice(1);
    }

    return username;
}

let emails = [
    "  AISHA@EXAMPLE.COM  ",
    "Raj@Example.COM",
    "ADMIN@BANKCORP.ORG   "
];

let usernames = [
    "  AishaK  ",
    "@AdminUser",
    "RAJ_VERMA "
];

console.log("Normalised emails:");

emails.forEach(email => {
    console.log(" ", normaliseEmail(email));
});

console.log("\nNormalised usernames:");

usernames.forEach(username => {
    console.log(" ", normaliseUsername(username));
});

function areEmailsEqual(email1, email2) {
    return normaliseEmail(email1) === normaliseEmail(email2);
}

console.log("\nEmail comparison examples:");
console.log(
    areEmailsEqual(
        "AISHA@EXAMPLE.COM",
        " aisha@example.com "
    )
);

console.log("\n=== Challenge: Customer Record Sanitiser ===\n");

function sanitiseCustomerRecord(customer) {
    const username = normaliseUsername(customer.username);

    let email = normaliseEmail(customer.email);

    if (!email.includes("@")) {
        console.log(
            `⚠ Warning: invalid email for user '${username}'`
        );
        email = null;
    }

    return {
        username,
        email,
        role: String(customer.role).trim().toLowerCase(),
        age: Number(customer.age)
    };
}

let rawCustomers = [
    {
        username: "  AishaK  ",
        email: "AISHA@EXAMPLE.COM",
        role: "ADMIN",
        age: "35"
    },
    {
        username: "RAJ ",
        email: "raj@bankcorp.com",
        role: "user",
        age: "42"
    },
    {
        username: "  baduser",
        email: "not-an-email",
        role: "VIEWER",
        age: "29"
    }
];

rawCustomers.forEach(customer => {
    let clean = sanitiseCustomerRecord(customer);
    console.log(clean);
});


// Normalised emails:
//   aisha@example.com
//   raj@example.com
//   admin@bankcorp.org

// Normalised usernames:
//   aishak
//   adminuser
//   raj_verma

// Email comparison examples:
// true

// === Challenge: Customer Record Sanitiser ===

// {
//   username: 'aishak',
//   email: 'aisha@example.com',
//   role: 'admin',
//   age: 35
// }
// { username: 'raj', email: 'raj@bankcorp.com', role: 'user', age: 42 }
// ⚠ Warning: invalid email for user 'baduser'
// { username: 'baduser', email: null, role: 'viewer', age: 29 }