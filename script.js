const questions = document.getElementById("questions");
const answers = document.getElementById("answers");
const submit = document.getElementById("submitBtn");
const start = document.getElementById("startBtn");

const quiz = [
    {quest: "1. What type of error do you receive when you're missing a closing semi-colon or closing bracket?", options: ["Broken Code", "Missing Element","Syntax Error", "Code Error"], ans: 2 },
    {quest: "2. Which option is NOT a JavaScript Data type", options: ["Boolean", "Variable", "String", "Undefined"], ans: 1 },
    {quest: "3. Which of the below would display a popup message to the user?", options: ["alert('Hello World!');", "popup('Hello World!')","message('Hello World!')", "message = 'Hello World!'"], ans: 0 },
    {quest: "4. Which JavaSript function adds an element to the end of an array?", options: ["end()", "addElement()", "document.add()", "push()"], ans: 3 },
    {quest: "5. Which option is NOT a valid JavaScript variable name?", options: ["computerScience", "compSci", "computer_science", "none of the above"], ans: 3 }
];

