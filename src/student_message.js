const { getGrade, getPassingGrade } = require("../src/score_to_grades.js");
const getAverage = require("../src/average_score.js");

function studentMessage(totalScore, studentGrade) {
  const average = getAverage(totalScore);
  const grade = getGrade(studentGrade);

  if (grade !== "F") {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      grade +
      ". Congratulations, you passed!"
    );
  } else {
    return (
      "Class average: " +
      average +
      ". Your grade: " +
      grade +
      ". Unfortunately, you have failed."
    );
  }
}

module.exports = studentMessage;
