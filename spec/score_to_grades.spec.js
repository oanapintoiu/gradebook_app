const getGrade = require("../src/score_to_grades.js");

describe("getGrade function", () => {
  test("converts score to grade", () => {
    const grade = getGrade(100);
    expect(grade).toBe("A++");
  });
});
