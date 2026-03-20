function decodeString(str) {
    let result = "";
    let i = 0;
  
    while (i < str.length) {
      const char = str[i++];
      let numStr = "";
      console.log(char)
      while (i < str.length && !isNaN(str[i])) {
        numStr += str[i++];
      }
  
      const count = numStr ? Number(numStr) : 1;
      result += char.repeat(count);
    }
  
    return result;
  }
  
  console.log(decodeString("ab2b5c1"));
  
  