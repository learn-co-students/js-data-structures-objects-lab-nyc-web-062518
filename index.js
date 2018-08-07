// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
function deleteFromDriverByKey(obj, key) {
  const newObj = Object.assign({}, obj)
  return delete newObj.key
}
function destructivelyDeleteFromDriverByKey(obj, key) {
  return delete obj[key]
}
