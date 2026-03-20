const firstNonRepeat = () => {
    let queue = []
    const map = new Map()
    return {
        process : (val) => {
            map.set(val, (map.get(val) || 0) + 1)
            if (map.get(val) === 1) {
                queue.push(val)
            }

            while (queue.length && map.get(val) > 1) {
                queue.pop()
            }

            return queue.length === 0 ? '#' : queue[0]

        }
    }
}

const queue = firstNonRepeat()
queue.process('a');
queue.process('a');
console.log(queue.process('a'))