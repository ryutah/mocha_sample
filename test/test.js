import assert from "assert"

describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})

function add() {
  return Array.prototype.slice.call(arguments).reduce((prev, curr) => prev + curr, 0)
}

describe("add()", () => {
  const tests = [
    {
      args: [1, 2],
      expected: 3
    },
    {
      args: [1, 2, 3],
      expected: 6
    },
    {
      args: [1, 2, 3, 4],
      expected: 10
    },
  ]

  tests.forEach((test) => {
    it(`correctly adds ${test.args.length} args`, () => {
      const res = add.apply(null, test.args)
      assert.equal(res, test.expected)
    })
  })
})

describe("a suite of tests", function() {
  this.timeout(500)

  it("should take less than 500ms", (done) => {
    setTimeout(done, 300)
  })
})
