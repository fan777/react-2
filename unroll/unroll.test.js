const unroll = require("./unroll");

describe("#unroll", function () {

  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];

  const badSquare1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8, 17],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  const badSquare2 = [
    ["a", "b", "c", "j"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("is an array", function () {
    expect(unroll(1)).toEqual(false);
    expect(unroll(true)).toEqual(false);
  })

  it("is a square array", function () {
    expect(unroll([[1, 2, 3]])).toEqual(false);
    expect(unroll(badSquare1)).toEqual(false);
    expect(unroll(badSquare2)).toEqual(false);
  })

  it("is solved", function () {
    expect(unroll([[1]])).toEqual([1]);
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  })
});
