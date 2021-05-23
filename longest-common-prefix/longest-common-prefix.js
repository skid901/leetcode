/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix;
    [prefix, ...strs] = strs;
    for (const str of strs) {
        while (prefix && str.indexOf(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1);
        }
        
        if (!prefix) break;
    }
    return prefix;
};
