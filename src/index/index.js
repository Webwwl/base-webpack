// import "@/style/index.scss";
// import "@babel/polyfill"
// import "./style/index.less";
// import "./js/tap.js";
import * as _ from 'lodash'
import $ from 'jquery'
// import { sayHello } from '../common/common'
// import { addMask } from "./js/lib";
// import { remInit } from "./js/rem";
// import { red } from "ansi-colors";
// import '@/style/main.scss';
window.getEl = function getEl(selector) {
  return document.querySelector(selector);
};

const div = document.createElement('div')
div.innerText = 'dynamic import '
div.className = 'dynamic'
div.onclick = function () {
  import('../common/common').then( common => {
    console.log('get common', common)
  })
}
document.body.appendChild(div)

$('.dynamic').css({
  color: 'red'
})
var a = [1,2]
a = _.map(a, (val) => val * val)
console.log('a:', a)