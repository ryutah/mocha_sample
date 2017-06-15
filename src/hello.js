export default class Hello {
  constructor(foo = "") {
    this.foo = foo
  }

  hello() {
    return `Hello ${this.foo}`
  }
}
