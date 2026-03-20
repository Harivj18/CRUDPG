const sortExp = () => {

}

console.log('SortExp', sortExp("{a,b}{c,{d,e}}")); //["ac", "ad", "ae", "bc", "bd", "be"]
console.log('SortExp', sortExp("{{a,z}, a{b,c}, {ab,x}}"));// ["a", "ab", "ac", "z"]
