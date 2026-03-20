const chocolate = (packets, m) => {
    let min = Infinity;
    packets = packets.sort((a,b) => a - b);
    for (let i = 0; i + m - 1 < packets.length; i++) {
        let diff = packets[i+m-1] - packets[i]
        if (diff < min) {
            min = diff;
        }
    }
    return min
}
console.log(chocolate([7, 3, 2, 4, 9, 12, 56], 3))