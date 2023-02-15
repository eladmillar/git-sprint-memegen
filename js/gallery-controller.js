'use strict'

function onInit() {
    renderGallery()
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