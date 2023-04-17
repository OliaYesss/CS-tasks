/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head, exist) {
  exist = new Set()

  while (head) {
      if (exist.has(head)) {
          return true
      } else {
          exist.add(head)
          head = head.next
      }
  }

  return false
};