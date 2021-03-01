module.exports = function reverse (n) {
  return n.toString().replace(/0*$/g, "").replace(/-/g, "").split('').reverse().join('');
}
