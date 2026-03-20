const strRemoval = (str1, str2) => {
    return str1.split(str2)[1]
}

console.log('strRemoval :', strRemoval('Tiger', 'Ti')); // ger
