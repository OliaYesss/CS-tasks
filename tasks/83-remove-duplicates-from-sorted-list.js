/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
      return head
  }
  
  if (head.val !== head.next.val) {
      deleteDuplicates(head.next)
  } else {
      head.next = head.next.next
      deleteDuplicates(head)
  }
  
  return head
};