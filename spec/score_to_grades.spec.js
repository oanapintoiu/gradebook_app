const getGrade = require("../src/score_to_grades.js");

describe("getGrade function", () => {
  test("converts score to grade", () => {
    const grade = getGrade(100);
    expect(grade).toBe("A++");
    const grade2 = getGrade(95);
    expect(grade2).toBe("A");
    const grade3 = getGrade(85);
    expect(grade3).toBe("B");
    const grade4 = getGrade(75);
    expect(grade4).toBe("C");
    const grade5 = getGrade(65);
    expect(grade5).toBe("D");
    const grade6 = getGrade(55);
    expect(grade6).toBe("F");
  });
});
