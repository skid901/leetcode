/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (isNaN(+token)) {
            const [right, left] = [stack.pop(), stack.pop()];
            stack.push(parseInt(eval(`(${left})${token}(${right})`)));
        } else stack.push(parseInt(token));
    }
    return stack.pop();
};
