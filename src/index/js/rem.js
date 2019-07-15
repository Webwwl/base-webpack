export function remInit(designWidth, ratio) {
  function setRem() {
    let scale = document.documentElement.clientWidth / designWidth;
    document.querySelector('html').style.fontSize = scale * ratio + 'px';
  }
  setRem()
  window.addEventListener('resize', setRem, true)
}
