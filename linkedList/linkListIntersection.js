const linkListIntersection = (head1, head2) => {
    if (!head1 || !head2) {
        return null
    }
    let a = head1, b = head2;

    while (a !== b) {
        a = a ? a.next : head2
        b = b ? b.next : head1
    }
    return a || b
}

const common = { val: 7, next: { val: 9, next: null } };

const headA = { val: 1, next: { val: 3, next: { val: 5, next: common } } };
const headB = { val: 2, next: { val: 4, next: common } };

const intersect = linkListIntersection(headB, headA);
console.log(intersect ? intersect.val : null);
