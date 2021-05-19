/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    const { floor, abs } = Math;
    const sum = arr => arr.reduce((a, b) => a + b, 0);
    
    nums.sort((a, b) => a - b);
    const median = nums[floor((nums.length - 1) / 2)];
    
    return sum(nums.map(num => abs(num - median)));
};
