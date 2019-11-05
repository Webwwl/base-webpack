void function (env, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
  : typeof define === 'function' ? define(['exports'], factory) : factory(global.wwl = {})
}(this, function(exports) {
  exports.say = function (str) {
    console.log('xxx say:', str)
  }
})