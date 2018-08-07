// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newdriver = {}

  return Object.assign(newdriver, {name: 'Sam', address: '11 Broadway'})
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value

  return driver
}


function deleteFromDriverByKey(driver, key) {
  const driverclone = {...driver}

  delete driverclone[key]
  return driverclone
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
