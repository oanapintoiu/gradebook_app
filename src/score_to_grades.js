function getGrade(score) {
  let grade = "";
  if (score === 100) {
    grade = "A++";
  }
  return grade;
}

module.exports = getGrade;
