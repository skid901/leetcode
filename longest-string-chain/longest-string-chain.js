/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const { max } = Math;
    words = [...words].sort((a, b) => a.length - b.length);
    
    let rtn = 1;
    const cache = {};
    for (const word of words) {
        let curr = 1;
        for (const idx in word) {
            const sub = word.slice(0, +idx) + word.slice(+idx + 1);
            curr = max(curr, (cache[sub] ?? 0) + 1);
        }
        cache[word] = curr;
        rtn = max(rtn, curr);
    }
    return rtn;
};
