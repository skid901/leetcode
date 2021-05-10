/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const medium = (nums1.length + nums2.length) / 2;
    const length = Math.floor(medium) + 1;
    const arr = [];
    
    let [idx1, idx2] = [0, 0];
    while (arr.length < length) {
        const [num1, num2] = [nums1[idx1], nums2[idx2]];
        switch (true) {
            case isNaN(num1):
                arr.push(num2);
                idx2++;
                break;
            case isNaN(num2):
                arr.push(num1);
                idx1++;
                break;
            default:
                if (num1 < num2) {
                    arr.push(num1);
                    idx1++;
                } else {
                    arr.push(num2);
                    idx2++;
                }
        }
    }
    
    return medium != length - 1
        ? arr[arr.length - 1]
        : (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
};