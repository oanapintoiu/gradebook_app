function getGrade(score) {
  let grade = "";
  if (score === 100) {
    grade = "A++";
  } else if (score >= 90 && score <= 99) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

module.exports = getGrade;
