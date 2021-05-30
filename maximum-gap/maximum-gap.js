/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    nums.sort((a, b) => a - b);
    let [rtn, prev] = [0, nums[0]];
    for (const num of nums) {
        rtn = Math.max(rtn, num - prev);
        prev = num;
    }
    return rtn;
};
