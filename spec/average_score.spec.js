const getAverage = require ('../src/average_score.js')

describe ('getAverage function', () => {
    test('calculates the average of an array of numbers', () => {
        const result = getAverage([10, 20, 30, 40]);
        const result2 = getAverage([37, 72, 55, 61, 99, 78, 85])
        const result3 = getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])
        expect(result).toBe(25);
        expect(result2).toBeCloseTo(69.57, 2);
        expect(result3).toBe(71.7)

    })
})