const addTwo = (l1, l2) => {
    let carry = 0;
    let dummy = {
        val: 0,
        next: null
    }
    let current = dummy
    while (l1 || l2 || carry) {
        const val1 = l1?.val || 0;
        const val2 = l2?.val || 0;

        const sum = val1 + val2 + carry;

        carry = sum / 10;
        let balance = Math.floor(sum % 10);
        current.next = {
            val: balance,
            next: null
        }
        current = current.next
        if (l1) {
           l1 = l1.next 
        }
        if (l2) {
           l2 = l2.next 
        }
    }
    return dummy.next
}
let node1 = { val: 2, next: null };
let node2 = { val: 4, next: null };
let node3 = { val: 3, next: null };

node1.next = node2;
node2.next = node3;

let node4 = { val: 5, next: null };
let node5 = { val: 6, next: null };
let node6 = { val: 4, next: null };

node4.next = node5;
node5.next = node6;

let list1 = node1;
let list2 = node4;

console.log('l1', list1);
console.log('l2', list2);

let result = addTwo(list1, list2);

console.log('Result', result);



// console.log('Two linked list add data :', addTwo([2, 4, 3], [5, 6, 4]));
// console.log('Two linked list add data :', addTwo([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
