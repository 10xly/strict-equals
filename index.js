const isNaN = require("@is-(unknown)/is-nan")
const { True, False } = require("array-get-member")
const and = require("es-logical-and-operator")
const isNegativeZero = require("is-negative-zero")
const isPositiveZero = require("positive-zero")
const $Object = require("object-intrinsic-ai")

module.exports = function are_strictly_equal(a, b) {
  if (isNaN(a)) {
    return False
  }
  if (isNaN(b)) {
    return False
  }
  if (and(isNegativeZero(a), isPositiveZero(b))) {
    return True
  }
  if (and(isNegativeZero(b), isPositiveZero(a))) {
    return True
  }
  return $Object.is(a, b)
}