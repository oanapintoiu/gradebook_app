const readline = require('readline');
const studentMessage = require("../src/student_message.js");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of students: ", (numStudents) => {
    const totalScores = [];
    let count = 0;

    const promptForGrade = () => {
        if (count < numStudents) {
            rl.question(`Enter the grade for student ${count + 1}: `, (grade) => {
                totalScores.push(parseInt(grade));
                count++;
                promptForGrade(); 
            });
        } else {
            rl.question("Enter your current grade: ", (studentGrade) => {
                const message = studentMessage(totalScores, parseInt(studentGrade));
                console.log(message);
                rl.close(); 
            });
        }
    };

    promptForGrade();
});