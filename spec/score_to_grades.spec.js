const { getGrade, getPassingGrade } = require("../src/score_to_grades.js");

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

describe("getPassing Grade function", () => {
  test("uses grade to determine if student failed or passed", () => {
    const grade = getPassingGrade(100);
    expect(grade).toBe(true);
    const grade2 = getPassingGrade(59);
    expect(grade2).toBe(false);
    const grade3 = getPassingGrade(76);
    expect(grade3).toBe(true);
    const grade4 = getPassingGrade(47);
    expect(grade4).toBe(false);
  });
});
