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
async function getValidNumberOfGrades() {
  while (true) {
    const numGrades = parseInt(await askQuestion('Enter the number of grades (max 6): '), 10);

    if (numGrades >= 1 && numGrades <= 6) {
      return numGrades;
    } else {
      console.log('Please enter a number between 1 and 6.');
    }
  }
}

const numGrades = await getValidNumberOfGrades();

async function getValidGrade(index) {
  while (true) {
    const input = await askQuestion(`Enter grade number ${index + 1}: `);
    const grade = parseFloat(input);
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
      return grade;
    } else {
      console.log('The grade must be between 0 and 100. Please try again.');
    }
  }
}

  const grades = [];
  for (let i = 0; i < numGrades; i++) {
    const grade = await getValidGrade(i);
    grades.push(grade);
  }

  const average = getAverage(grades);
  const letterGrade = getGrade(average);
  const passing = getPassingGrade(average);
  const message = `Your average is ${average.toFixed(2)} (${letterGrade}). ${passing ? 'Congratulations, you passed!' : 'Unfortunately, you failed.'}`;

  console.log(message);
  rl.close();
}

main();
