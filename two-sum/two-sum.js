/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let idx = 0;
    while (idx < nums.length) {
        const pair = nums.indexOf(target - nums[idx]);
        if (pair >= 0 && idx !== pair) return [idx, pair];
        idx++;
    }
};