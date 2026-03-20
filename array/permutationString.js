const permutationString = (str) => {
   const result = []
   const formCombination = (prefix, remaining) => {
      if (remaining.length === 0) {
         result.push(prefix)
         return
      }
      for (let i = 0; i < remaining.length; i++) {
         const newPrefix = prefix + remaining[i]
         const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1)
         formCombination(newPrefix, newRemaining)
      }
   }
   formCombination('', str)
   return result
}
console.log('Permutation for given string :', permutationString('ABC'));
