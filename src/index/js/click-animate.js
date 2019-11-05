export class ClickAnimate {
  constructor(selector) {
    this.el = document.querySelector(selector)
    this.init()
  }
  init() {
    this.el.addEventListener('click', this.lanuch(), false)
  }
  lanuch() {
    return function handleClick(event) {
      let { clientX, clientY } = event
      console.log('client x y', clientX, clientY)
      let ele = document.createElement('div')
      Object.assign(ele.style, {
        position: 'fixed',
        top: clientY + 'px',
        left: clientX + 'px'
      })
      ele.classList.add('slide-show')
      document.body.appendChild(ele)
      setTimeout(() => {
        ele.remove()
      }, 1300);
    }
  }
}