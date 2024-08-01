const readline = require('readline');
const { getGrade, getPassingGrade } = require('./src/score_to_grades');
const getAverage = require('./src/average_score');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const numGrades = parseInt(await askQuestion('Enter the number of grades (max 6): '), 10);

  if (numGrades < 1 || numGrades > 6) {
    console.log('Please enter a number between 1 and 6.');
    rl.close();
    return;
  }

async function getValidGrade(index) {
    const input = await askQuestion(`Enter grade number ${index + 1}: `);
    const grade = parseFloat(input);
}

  const grades = [];
  for (let i = 0; i < numGrades; i++) {
    const grade = await getValidGrade(i);
    grades.push(grade);
  }

  
}

main();
