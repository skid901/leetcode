/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const convertPattern = word => {
        const [stack, map] = [[], {}];
        let index = 0;
        for (const chr of word) {
            const position = map[chr];
            if (isNaN(position)) {
                stack.push(index);
                map[chr] = index++;
            } else stack.push(position);
        }
        return stack.join('');
    };
    
    const converted = convertPattern(pattern);
    return words.filter(word => convertPattern(word) === converted);
};
