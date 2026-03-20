const gasStation = (gas, cost) => {
    let currentGas = 0;
    let totalGas = 0;
    let startingPoint = 0;
    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i];
        currentGas += diff;
        totalGas += diff;
        if (currentGas < 0) {
            startingPoint ++
            currentGas = 0
        }
    }
    return totalGas >= 0 ? startingPoint : -1
}
console.log('Result of gasStation :', gasStation([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
