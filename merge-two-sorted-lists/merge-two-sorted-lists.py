# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        def mergeNode(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
            if not l1 or l2 and l1.val > l2.val:
                l1, l2 = l2, l1
            if l1:
                l1.next = mergeNode(l1.next, l2)
            return l1
        return mergeNode(list1, list2)