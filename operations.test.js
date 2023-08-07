const { onlyNums, calculateMean, calculateMedian, calculateMode } = require('./operations');
const numbers = '1,2,3,4,4';

describe("onlyNums function", () => {
    test('onlyNums should be true only if list of nums entered', () => {
        const res = onlyNums(numbers);
        expect(res).toEqual(true);
    })
    test('should return false for a string containing non-numeric characters', () => {
        const res = onlyNums('1,2,a,4,5');
        expect(res).toEqual(false);
    })

    test('should return false for an empty input', () => {
        const res = onlyNums('');
        expect(res).toEqual(false);
    })
})

describe("calculateMean function", () => {
    test('should calculate the mean of an array of numbers', () => {
        const res = calculateMean(numbers);
        expect(res).toEqual(2.8);
    })
    test('should return 0 for an empty array', () => {
        const res = calculateMean('');
        expect(res).toEqual(0);
    })
})

describe("calculateMedian function", () => {
    test('should calculate the median of an array of numbers', () => {
        const res = calculateMedian(numbers);
        expect(res).toEqual(3);
    })
})

describe("calculateMode function", () => {
    test('should calculate the mode of an array of numbers', () => {
        const res = calculateMode(numbers);
        expect(res).toEqual([4]);
    })
    test('should handle multiple modes', () => {
        const res = calculateMode('1,2,2,3,3,4,4');
        expect(res).toEqual([2, 3, 4]);
    })
})