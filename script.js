const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function getValidNumberOfGrades() {
  while (true) {
    const input = await askQuestion('Enter the number of grades (max 6): ');
    const numGrades = parseInt(input, 10);

    if (numGrades >= 1 && numGrades <= 6) {
      return numGrades;
    } else {
      console.log('Please enter a number between 1 and 6.');
    }
  }
}

async function main() {
  const numGrades = await getValidNumberOfGrades();
  console.log(`Number of grades entered: ${numGrades}`);
  rl.close();
}

main();


