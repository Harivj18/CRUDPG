const taskScheduler = (task, n) => {
    const freq = new Array(26).fill(0);
    for (let element of task) {
        freq[element.charCodeAt(0) - 'A'.charCodeAt(0)]++
    }
    freq.sort((a, b) => b - a);
    const fMax = freq[0]
    const countMax = freq.filter((f) => f === fMax).length
    return Math.max(
        task.length,
        (fMax - 1) * (n+1) + countMax
    )
}

console.log('Scheduler task :', taskScheduler(["A", "A", "A", "B", "B", "B"], 2));
