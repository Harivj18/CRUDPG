const reverseLinkedList = (headList) => {
    let prev = null;
    let current = headList;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const headList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

const newHeadList = reverseLinkedList(headList);

let tempResult = newHeadList;

while (tempResult) {
    console.log('Temporary Result Set', tempResult.value);
    tempResult = tempResult.next;
}
