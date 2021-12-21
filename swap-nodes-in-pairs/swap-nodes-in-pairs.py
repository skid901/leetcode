# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def swapNodes(node):
            if not node or not node.next:
                return node
            a, b = node, node.next
            b.next, a.next = a, b.next
            a.next = swapNodes(a.next)
            return b
        return swapNodes(head);