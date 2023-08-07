function onlyNums(input) {
    return /^[0-9,]+$/.test(input.trim());
}

function calculateMean(nums) {
    const numsArray = nums.split(',').map(Number);

    if (numsArray.length === 0) {
        return 0;
    }

    const sum = numsArray.reduce((acc, num) => acc + num, 0);
    const mean = sum / numsArray.length;

    return mean;
};

function calculateMedian(nums) {
    const numsArray = nums.split(',').map(Number);
    const sortedArray = numsArray.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        const median = (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
        return median;
    } else {
        return sortedArray[middleIndex];
    }
};

function calculateMode(nums) {
    const numsArray = nums.split(',').map(Number);
    const frequencyMap = new Map();
    let maxFrequency = 0;
    let mode = [];

    for (const num of numsArray) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }

        const frequency = frequencyMap.get(num);

        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mode = [num];
        } else if (frequency === maxFrequency) {
            mode.push(num);
        }
    }

    return mode;
};

module.exports = { onlyNums, calculateMean, calculateMedian, calculateMode }