#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n Welcome to Moiz Ali Quiz-system \n"));
console.log(chalk.blue("\n You need to score 4 points to pass the quiz!\n"));

let points: number = 0;

// Question 1
const question1 = await inquirer.prompt([
  {
    name: "one",
    message: "What is the capital of Pakistan?",
    type: "list",
    choices: ["Karachi", "Lahore", "Islamabad", "Quetta"],
  },
]);
if (question1.one == "Islamabad") {
  console.log(chalk.green("Correct!"));
  points++;
} else {
  console.log(chalk.red("Incorrect!"));
}

// Question 2
const question2 = await inquirer.prompt([
  {
    name: "two",
    message: "What does the | operator signify in TypeScript?",
    type: "list",
    choices: [
      "increment operator",
      "AND operator",
      "OR operator",
      "decrement operator",
    ],
  },
]);
if (question2.two == "OR operator") {
  console.log(chalk.green("Correct!"));
  points++;
} else {
  console.log(chalk.red("Incorrect!"));
}

// Question 3
const question3 = await inquirer.prompt([
  {
    name: "three",
    message: "Typescript is the superset of ?",
    type: "list",
    choices: ["Javascript", "c++", "html", "python"],
  },
]);
if (question3.three == "Javascript") {
  console.log(chalk.green("Correct!"));
  points++;
} else {
  console.log(chalk.red("Incorrect!"));
}

// Question 4
const question4 = await inquirer.prompt([
  {
    name: "four",
    message:
      'What is the type of the variable value in the following code? let value: any = "Hello";',
    type: "list",
    choices: ["string", "any", "number", "boolean"],
  },
]);
if (question4.four == "any") {
  console.log(chalk.green("Correct!"));
  points++;
} else {
  console.log(chalk.red("Incorrect!"));
}

// Question 5
const question5 = await inquirer.prompt([
  {
    name: "five",
    message:
      "What is the output of the following TypeScript code? console.log(typeof 42);",
    type: "list",
    choices: ["string", "any", "number", "boolean"],
  },
]);

if (question5.five == "number") {
  console.log(chalk.green("Correct!"));
  points++;
} else {
  console.log(chalk.red("Incorrect!"));
}

// points
if (points >= 4) {
  console.log(chalk.green("\n Congratulation! you passed the quiz \n"));
} else {
  console.log(chalk.red("\n Unfortunately! you failed the quiz \n"));
}
console.log(chalk.yellow(`Your points are ${points}`));
