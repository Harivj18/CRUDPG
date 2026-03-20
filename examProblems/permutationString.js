const permutationString = (str) => {
    let result = [];
    const formPermuation = (prefix, str) => {
        console.log('prefix',prefix);
        console.log('str',str);
        
        if (str.length === 0) {
            result.push(prefix);
            return
        }
        for (let i = 0; i < str.length; i++) {
            const newPrefix = prefix + str[i];
            const newStr = str.slice(0,i) + str.slice(i+1);
            formPermuation(newPrefix, newStr)
        }
    }
    formPermuation('', str)
    return result
};

console.log('Permutation for given string :', permutationString('ABC'));

// ABC