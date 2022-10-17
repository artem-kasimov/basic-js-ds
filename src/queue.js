const { NotImplementedError } = require('../extensions/index.js')

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._queue = {}
  }
  getUnderlyingList() {
    return this._queue
  }

  enqueue(value) {
    if (Object.keys(this._queue).length === 0) {
      this._queue.value = value
      this._queue.next = null
    } else {
      if (this._queue.next !== null) {
        let temp = this._queue.next
        while (temp === null) {
          temp = temp.next
        }
        temp.next = {
          value,
          next: null,
        }
      } else {
        this._queue.next = {
          value,
          next: null,
        }
      }
    }
  }

  dequeue() {
    let output = this._queue.value

    this._queue = this._queue.next

    return output
  }
}

// const queue = new Queue()
// queue.enqueue(1)
// console.log(queue.getUnderlyingList())
// queue.enqueue(3)
// console.log(queue.getUnderlyingList())
// queue.enqueue(5)
// console.log(queue.getUnderlyingList())
// queue.dequeue()
// console.log(queue.getUnderlyingList())
module.exports = {
  Queue,
}
