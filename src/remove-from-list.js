const { NotImplementedError } = require('../extensions/index.js')

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let list = l

  while (list) {
    if (list.value === k) {
      if (list.next) {
        list.value = list.next.value
        list.next = list.next.next
      } else {
        list = null
      }
    } else {
      list = list.next
    }
  }
  return l
}

let list = {
  value: 10,
  next: { value: 20, next: { value: 30, next: null } },
}
console.log(removeKFromList(list, 30))

module.exports = {
  removeKFromList,
}
