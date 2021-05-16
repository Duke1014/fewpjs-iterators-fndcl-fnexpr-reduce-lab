const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let total = 0

const reducer = (accumulator, item) => {
    return accumulator + item;
}

const totalBatteries = batteryBatches.reduce(reducer, total)

// batteryBatches.reduce(function(totalBatteries, currentValue) {
//     return totalBatteries + currentValue
// })