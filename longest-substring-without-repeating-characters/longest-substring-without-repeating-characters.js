/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let [ans, curr] = [0, ``];
    for (const _s of s) {
        const idx = curr.indexOf(_s);
        if (idx >= 0) {
            ans = Math.max(ans, curr.length);
            curr = curr.slice(idx + 1) + _s;
        } else curr += _s;
    }
    return Math.max(ans, curr.length);
};