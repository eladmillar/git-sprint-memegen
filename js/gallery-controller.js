'use strict'

let gMemeControl

function onInit() {
    renderGallery()
    let gMemeControl = document.querySelector('.meme-inputs')
}

function onLoadGallery() {
    renderGallery()
    document.querySelector('.image-gallery').hidden = false
    document.querySelector('.canvas-container').hidden = true
    // document.querySelector('.meme-inputs').hide()
    // memeControl.style.display = none
}

function renderGallery() {
    let strHTML = ``
    gImgs.forEach(img => strHTML += `<img onclick="onImageSelect(${img.id})" src="${img.url}" alt="">\n`)
    document.querySelector('.image-gallery').innerHTML = strHTML
}

function onImageSelect(imgIdx) {
    setImage(imgIdx)
    document.querySelector('.image-gallery').hidden = true
    onMemeInit()
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}