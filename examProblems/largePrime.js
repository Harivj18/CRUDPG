const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const getPermutations = (str) => {
    if (str.length === 1) return [str];
    const perms = [];
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        const rest = str.slice(0, i) + str.slice(i + 1);
        for (let perm of getPermutations(rest)) {
            perms.push(ch + perm);
        }
    }
    return perms;
};

const largePrime = (pos, num) => {
    const perms = new Set(getPermutations(num.toString()));
    const primes = [];

    for (let val of perms) {
        const n = parseInt(val, 10);
        if (isPrime(n)) primes.push(n);
    }

    primes.sort((a, b) => b - a); // descending
    return primes[pos - 1] || null;
};

console.log('largePrime:', largePrime(5, 4691)); // 9461
