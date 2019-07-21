// import "@/style/index.scss";
// import "@babel/polyfill"
// import "./style/index.less";
import "./js/tap.js";
// import { sayHello } from '../common/common'
import { addMask } from "./js/lib";
// import { remInit } from "./js/rem";
// import { red } from "ansi-colors";
// import '@/style/main.scss';
window.getEl = function getEl(selector) {
  return document.querySelector(selector);
};
const div = document.createElement('div')
div.innerText = 'dynamic import '
div.onclick = function () {
  import('../common/common').then( common => {
    console.log('get common', common)
  })
}
document.body.appendChild(div)

const a = new Set([1,2])
console.log('get a:', a)