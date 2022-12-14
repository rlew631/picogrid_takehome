// https://www.browserstack.com/guide/unit-testing-for-nodejs-using-jest
const app = require('../src/app');

describe("Line Segment Tests", () => {
  test("two overlapping lines", () => {
  // arrange and act
  var result = app.overlap([0,4],[2,4])
  
  // assert
  expect(result).toStrictEqual([2,2]);
  })

  test("two overlapping lines, l2 is first", () => {
    // arrange and act
    var result = app.overlap([2,4],[0,4])
    
    // assert
    expect(result).toStrictEqual([2,2]);
    })

  test("l1 inside l2", () => {
    // arrange and act
    var result = app.overlap([2,5],[4,1])
    
    // assert
    expect(result).toStrictEqual([4,1]);
    })

    test("l2 inside l1", () => {
      // arrange and act
      var result = app.overlap([4,1],[2,5])
      
      // assert
      expect(result).toStrictEqual([4,1]);
      })

    test("no overlap", () => {
      // arrange and act
      var result = app.overlap([0,3],[4,1])
      
      // assert
      expect(result).toStrictEqual(null);
      })

})