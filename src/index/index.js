// import "@/style/index.scss";
// import "@babel/polyfill"
// import "./style/index.less";
// import "./js/tap.js";
// import * as _ from 'lodash'
// import $ from 'jquery'
// import { __await } from 'tslib';
// import './style/main.scss'
// import { ClickAnimate } from './js/click-animate'
// let utils = require('./js/utils')
/* import { sayHello } from '../common/common'
import { addMask } from "./js/lib";
import { remInit } from "./js/rem";
import { red } from "ansi-colors";
import '@/style/main.scss'; */

import '../test'

import { BehaviorSubject } from 'rxjs'

window.getEl = function getEl(selector) {
  return document.querySelector(selector);
};

const value$ = new BehaviorSubject({a: 1})

value$.subscribe( res => console.log('get value:', res))

value$.next({a: 2})

console.log(Greet_text)