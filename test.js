function test() {
  var res = '124'
  var a = {}
  a.get = function () {
    return this.res
  }
  {
    a.set = function () {
      console.warn('a is readonly')
    }
  }
}
