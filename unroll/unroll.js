function unroll(squareArray) {
  if (squareArray && !Array.isArray(squareArray)) {
    return false;
  }

  if (!squareArray.every(array => Array.isArray(array) && squareArray.length === array.length)) {
    return false;
  }

  //

  return false;
}

module.exports = unroll;
