const longPalindromeSub = (str) => {
    let ans = ''
    const verifyPalindrome = (left, right) => {
        while (left >= 0 && right < str.length - 1 && str[left] === str[right]) {
            right++
            left--
        }
        return str.slice(left + 1, right)
    }

    for (let i = 0; i < str.length; i++) {
        const odd = verifyPalindrome(i, i);
        const even = verifyPalindrome(i, i + 1)
        if (odd.length >= ans.length) {
            ans = odd
        }
        if (even.length >= ans.length) {
            ans = even
        }
    }
    return ans
}
console.log('longPalindromeSub :', longPalindromeSub('babad')); // bab or aba
console.log('longPalindromeSub :', longPalindromeSub('cbbd'));  // bb
