import assert from "assert"
import Hello from "../src/hello"

describe("Hello", () => {
  describe("#hello()", () => {
    beforeEach(() => {
      console.log("Hogehoge")
    })

    it("should return Hello hoge when given hoge", () => {
      const hello = new Hello("hoge")
      assert.equal(hello.hello(), "Hello hoge")
    })
    it("should return Hello when no args given", () => {
      const hello = new Hello()
      assert.equal(hello.hello(), "Hello ")
    })
  })
})
