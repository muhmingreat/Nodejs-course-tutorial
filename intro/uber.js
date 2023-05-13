
let availableUber = true
const clientMakeOrder = false

const uberReady = () => {
    if(availableUber && clientMakeOrder )  return console.log('Uber is Ready')
    else console.log('Uber is not Ready')
}

const fuelMinLimit = 50
const fuelMaxLimit = 250

const fuelLimit = (minError, maxError) => {
    if(fuelMinLimit <= 50) return minError
    else if (fuelMaxLimit >= 250)  return maxError;
    else console.log("Fuel Limitation is cool we can ride on ");
}
module.exports = { uberReady, fuelLimit}