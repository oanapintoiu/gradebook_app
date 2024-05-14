const getAverage = require ('../src/gradebook_app')

describe ('getAverage function', () => {
    test('calculates the average of an array of numbers', () => {
        const result = getAverage([10, 20, 30, 40]);
        expect(result).toBe(25);
    })
})