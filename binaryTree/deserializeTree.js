const deserializeTree = (data) => {
    if (data.length < 0) {
        return null
    }
    let i = 0;
    const formTree = (node) => {
        console.log('n',node[i]);
        
        if (node[i] === "null") {
            i++
            return null
        }
        let root = {
            val: node[i++],
            left: null,
            right: null
        }
        root.left = formTree(node)
        root.right = formTree(node)
        return root
    }
    return formTree(data)
}

console.log('Deserialized tree',
    deserializeTree([1, 2, 4, "null", "null", 5, "null", "null", 3, 6, "null", "null", 7, "null", "null"]));
