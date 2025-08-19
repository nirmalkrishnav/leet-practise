class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let arr: ListNode[] = [];

  if (head === null) return head;

  arr.push(head);
  while (head.next != null) {
    head = head.next;
    arr.push(head);
  }
  console.log(arr);
  if (arr.length % 2 === 0) {
    return arr[arr.length / 2];
  } else {
    return arr[Math.ceil(arr.length / 2) - 1];
  }
}
let six = new ListNode(5);
let five = new ListNode(5,six);
let f = new ListNode(4, five);
let th = new ListNode(3, f);
let two = new ListNode(2, th);
let one = new ListNode(1, two);
console.log(middleNode(one));
