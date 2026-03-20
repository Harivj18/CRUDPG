const tempClassifier = (num) => {
    let result = [];
    let avg = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] < 10) {
            result.push('its very cool')
        } else if (num[i] >= 10 && num[i] <= 20) {
            result.push('its cold')
        } else if (num[i] > 20) {
            result.push('its warm')
        }
        avg += num[i]
    }
    result.push(parseFloat(avg / num.length, 2));
    result.push(...num.reverse())
    return result.join(' , ');
}

console.log('Temperature Classifier :', tempClassifier([5, 25]));

// <10 => its very cool
// 10 to 20 => its cold
// > 20 its warm

// output
// category
// avg of temp
// given temp in reverse
