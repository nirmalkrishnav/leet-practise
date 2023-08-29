class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let [slow, fast] = [head, head];
  while (slow && fast && fast.next !== null) {
    fast = fast.next?.next;
    slow = slow?.next;
  }

  return slow;
}

let six = new ListNode(6);
let five = new ListNode(5, six);
let f = new ListNode(4, five);
let th = new ListNode(3, f);
let two = new ListNode(2, th);
let one = new ListNode(1, two);
console.log("result", middleNode(one));
