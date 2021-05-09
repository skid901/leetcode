/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let [ans, curr, upper] = [null, null, 0];
    while (l1 || l2 || upper) {
        let val = (l1?.val ?? 0) + (l2?.val ?? 0) + upper;
        upper = Math.floor(val / 10);
        val -= upper * 10;
        
        if (ans) curr = curr.next = new ListNode(val);
        else ans = curr = new ListNode(val);
        [l1, l2] = [l1?.next, l2?.next];
    }
    return ans;
};