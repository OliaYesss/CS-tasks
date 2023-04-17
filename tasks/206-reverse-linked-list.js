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

var helper = function(head, newNode) {
  if (head === null) {
      return null
  }

  newNode.next = new ListNode()
  
  let node = helper(head.next, newNode.next)

  if (node) {
      node.val = head.val
  }

  return newNode
};

var reverseList = function(head) {
  // const newNode = new ListNode()

  // helper(head, newNode)

  // return newNode

  let [ prev, curr, next ] = [ null, head, null ];

  while (curr) {/* Time O(N) */
      next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
  }

  return prev;
};
