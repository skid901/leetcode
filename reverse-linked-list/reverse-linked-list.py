# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverseNode(node, prev):
            if not node:
                return prev
            node.next, prev, node = prev, node, node.next
            return reverseNode(node, prev)
        return reverseNode(head, None)