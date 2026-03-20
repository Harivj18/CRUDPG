const reverseLinkedList = (head) => {
    if (!head) {
        return null
    }
    let prev = null
    let current = head;
    while (current) {
        let next = current.next
        current.next = prev;
        prev = current
        current = next
    }
    return prev
}

let head = {
    val: 1, next: {
        val: 2, next: {
            val: 3, next: {
                val: 4, next:{
                    val: 5, next:null
                }
            }
        }
    }
}

let result = reverseLinkedList(head);

let temp = result;

while (temp) {
    console.log('Reversed Linked List:', temp.val);
    temp = temp.next
}


