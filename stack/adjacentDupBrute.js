const adjacentDup = (str) => {
    let changed = true;
    while (changed) {
        changed = false
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] === str[i + 1]) {
                str = str.slice(0, i) + str.slice(i + 2)
                changed = true
                break
            }
        }
    }
    return str
}
console.log('Removing adjacent duplicates :', adjacentDup("abbaca")); // ca
console.log('Removing adjacent duplicates :', adjacentDup("azxxzy")); // ay
