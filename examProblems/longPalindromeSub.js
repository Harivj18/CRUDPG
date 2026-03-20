const longPalindromeSub = (str) => {
    let ans = '';
    const findPalindrome = (start, end) => {
        while (start >= 0 && end < str.length - 1 && str[start] === str[end]) {
            end++;
            start--;
        }
        return str.slice(start + 1, end)
    }
    for (let i = 0; i < str.length; i++) {
        let even = findPalindrome(i, i);
        let odd = findPalindrome(i, i + 1);

        if (even.length > ans.length) {
            ans = even
        }
        if (odd.length > ans.length) {
            ans = odd
        }
    }
    return ans
};

console.log('longPalindromeSub :', longPalindromeSub('babad')); // bab or aba
console.log('longPalindromeSub :', longPalindromeSub('cbbd'));  // bb
