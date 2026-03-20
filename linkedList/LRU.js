function LRUCache(capacity) {
    const map = new Map(); // Stores key -> node
    const head = { prev: null, next: null }; // dummy head
    const tail = { prev: null, next: null }; // dummy tail
    head.next = tail;
    tail.prev = head;

    function addNode(node) {
        // Insert node right after head
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }

    function removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    function moveToFront(node) {
        removeNode(node);
        addNode(node);
    }

    function evictLRU() {
        const lru = tail.prev;
        removeNode(lru);
        map.delete(lru.key);
    }

    return {
        get: function (key) {
            if (!map.has(key)) return -1;
            const node = map.get(key);
            moveToFront(node);
            return node.value;
        },

        put: function (key, value) {
            if (map.has(key)) {
                const node = map.get(key);
                node.value = value;
                moveToFront(node);
            } else {
                if (map.size >= capacity) {
                    evictLRU();
                }
                const newNode = { key, value, prev: null, next: null };
                addNode(newNode);
                map.set(key, newNode);
            }
        },
    };
}


const lru = LRUCache(2);

lru.put(1, 1);          // cache: {1=1}
lru.put(2, 2);          // cache: {2=2, 1=1}
console.log(lru.get(1)); // 1 → cache: {1=1, 2=2}
lru.put(3, 3);          // evict key=2 → cache: {3=3, 1=1}
console.log(lru.get(2)); // -1
lru.put(4, 4);          // evict key=1 → cache: {4=4, 3=3}
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3 → cache: {3=3, 4=4}
console.log(lru.get(4)); // 4 → cache: {4=4, 3=3}
