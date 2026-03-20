class Node {
    constructor(val, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
    }
  }
  
  function copyRandomList(head) {
    if (!head) return null;
  
    // Step 1: Clone nodes in between
    let current = head;
    while (current) {
      const copy = new Node(current.val); // {val:1, next:}
      copy.next = current.next; // 1 -> next -> 2
      current.next = copy; // 2 -> next -> 1
      current = copy.next; // 1 -> 2
    }
  
    // Step 2: Assign random pointers
    current = head;
    while (current) {
      if (current.random) {
        current.next.random = current.random.next;
      }
      current = current.next.next;
    }
  
    // Step 3: Restore original and extract copy
    current = head;
    let dummyHead = new Node(0);
    let copyCurrent = dummyHead;
  
    while (current) {
      const nextOriginal = current.next.next;
  
      const copy = current.next;
      copyCurrent.next = copy;
      copyCurrent = copy;
  
      current.next = nextOriginal;
      current = nextOriginal;
    }
  
    return dummyHead.next;
  }
  

// Create a list: 7 -> 13 -> 11 -> 10 -> 1 with random pointers
const n1 = new Node(7);
const n2 = new Node(13);
const n3 = new Node(11);
const n4 = new Node(10);
const n5 = new Node(1);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

// Assign random pointers
n2.random = n1;
n3.random = n5;
n4.random = n3;
n5.random = n1;

// Call copy function
const copiedHead = copyRandomList(n1);

// Print original and copied list
function printList(head) {
  let current = head;
  while (current) {
    const randVal = current.random ? current.random.val : null;
    console.log(`Node(${current.val}), Random(${randVal})`);
    current = current.next;
  }
}

console.log("Original List:");
printList(n1);
console.log("Copied List:");
printList(copiedHead);
