const studentMessage = require("../src/student_message.js");
const { getGrade, getPassingGrade } = require("../src/score_to_grades.js");
const getAverage = require("../src/average_score.js");

describe("getStudentMessage function", () => {
  test("send string message to passing student with average score and grade", () => {
    const grade = 85;
    const totalScores = [54, 68, 96, 80];
    const result = studentMessage(totalScores, grade);
    expect(result).toBe(
      "Class average: " +
        getAverage(totalScores) +
        ". Your grade: " +
        getGrade(grade) +
        ". Congratulations, you passed!"
    );
  });

  test("send string message to failing student with average score and grade", () => {
    const grade = 55;
    const totalScores = [80, 100, 70, 55];
    const result = studentMessage(totalScores, grade);
    expect(result).toBe(
      "Class average: " +
        getAverage(totalScores) +
        ". Your grade: " +
        getGrade(grade) +
        ". Unfortunately, you have failed."
    );
  });
});
