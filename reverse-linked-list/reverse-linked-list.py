# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverseNode(node: Optional[ListNode], prev: Optional[ListNode] = None):
            if not node:
                return prev
            prev, prev.next, node = node, prev, node.next
            return reverseNode(node, prev)
        return reverseNode(head)