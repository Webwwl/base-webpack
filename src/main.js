import "@/style/index.scss";
function getEl(selector) {
  return document.querySelector(selector);
}
let app = getEl("#app");
app.style.background = "red";

import(/* webpackChunkName: 'lib' */'@/js/lib.js').then( lib => {
  let { sum } = lib
  console.log('1+2+3+4 = ', sum(1,2,3,4))
})