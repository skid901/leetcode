/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    
    x = `${x}`;
    const { length } = x;
    const limit = parseInt(length / 2) - 1;
    for (let i = 0; i <= limit; i++) {
        if (x[i] !== x[length - 1 - i]) return false;
    }
    return true;
};
