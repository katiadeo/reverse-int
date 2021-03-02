module.exports = function reverse (n) {
  return n.toString().replace(/^0/, "").replace(/-/, "").split('').reverse().join('');
}
