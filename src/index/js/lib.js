export function sum(...rest) {
    return rest.reduce( (init, val) => init + val)
}

export function addMask(el) {
    let div = document.createElement('div')
    div.style.width = el.clientWidth + 'px'
    div.style.height = el.clientHeight + 'px'
    div.style.position = 'absolute'
    div.style.left = '0'
    div.style.top = '0'
    div.addEventListener('click', (e) => e.stopPropagation(), false);
    div.style.backgroundColor = '#ccc'  
    el.style.position = 'relative'
    el.appendChild(div)
}