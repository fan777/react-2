function unroll(squareArray) {
  if (squareArray && !Array.isArray(squareArray)) {
    return false;
  }

  if (!squareArray.every(array => Array.isArray(array) && squareArray.length === array.length)) {
    return false;
  }

  let returnArray = [];
  let [left, right] = [0, squareArray.length - 1]
  let [top, bottom] = [0, squareArray.length - 1]
  while (returnArray.length < squareArray.length ** 2) {
    // step1 go across top bound from left to right
    for (let i = left; i <= right; i++) {
      returnArray.push(squareArray[top][i]);
    }
    top++;
    // step 2 go down right bound from top to bottom
    for (let i = top; i <= bottom; i++) {
      returnArray.push(squareArray[i][right]);
    }
    right--;
    // step 3 go across bottom bound from right to left
    for (let i = right; i >= left; i--) {
      returnArray.push(squareArray[bottom][i]);
    }
    bottom--;
    // step 4 go up left bound from bottom to top
    for (let i = bottom; i >= top; i--) {
      returnArray.push(squareArray[i][left]);
    }
    left++;
  }

  return returnArray;
}

// const square = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];

// const smallerSquare = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"]
// ];

// console.log(unroll(smallerSquare));

module.exports = unroll;
