'use strict'

const buttonSwitchColor = document.getElementById('switch-color')

function switchColor() {
    const color = document.getElementById('color').value
    document.documentElement.style.setProperty('--bg-color', color)
}

buttonSwitchColor.addEventListener('click', switchColor)