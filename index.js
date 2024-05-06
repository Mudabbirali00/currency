#! /usr/bin/env node
import inquirer from "inquirer";
let currencies = {
    "PKR": {
        "PKR": 1,
        "EURO": 0.003,
        "USD": 0.004
    },
    "USD": {
        "USD": 1,
        "PKR": 277.95,
        "EURO": 0.937
    },
    "EURO": {
        "EURO": 1,
        "PKR": 296.575,
        "USD": 1.067
    },
};
let answer = await inquirer.prompt([
    {
        message: "Enter Your Currency",
        type: "number",
        name: "amount"
    },
    {
        message: "Select Your Currency",
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "EURO"]
    },
    {
        message: "Please Select Your Conversion Currency",
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "EURO"]
    },
]);
let { from, to, amount } = answer;
if (from && to && amount) {
    let result = currencies[from][to] * amount;
    console.log(`Your result is from ${from} to ${to} is ${result} `);
}
else {
    console.log("Wrong Input");
}
