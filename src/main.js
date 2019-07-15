// import "@/style/index.scss";
import "@/style/index.less";
import "@/js/tap.js";
import { addMask } from "@/js/lib";
import { remInit } from '@/js/rem'
// import '@/style/main.scss';
window.getEl = function getEl(selector) {
  return document.querySelector(selector);
};

console.log('document-ElementClientWidth:', document.documentElement.clientWidth)
console.log('window-innerWidth:', window.innerWidth)
console.log('screen-width:', screen.width)

let ul = window.getEl('ul')
