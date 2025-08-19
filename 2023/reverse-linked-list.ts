class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let previous: ListNode | null = null;
  let current = head;

  if (current !== null) {
    let newNext = current.next;
    current.next = previous;
    previous = current;
    current = newNext;
  }

  return previous;
}

function reverseList2(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
    console.log(prev);
  }

  return prev;
}

let three = new ListNode(3, null);
let two = new ListNode(2, three);
let one = new ListNode(1, two);
reverseList2(one);
