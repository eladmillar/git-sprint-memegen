'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    console.log('hi');
    let strHTML = ``
    gImgs.forEach(img => strHTML += `<img onclick="onImageSelect(${img.id})" src="${img.url}" alt="">\n`)
    console.log(strHTML)
    document.querySelector('.image-gallery').innerHTML = strHTML
}

function onImageSelect(imgIdx) {
    console.log('imgIdx', imgIdx)
    setImage(imgIdx)
    document.querySelector('.image-gallery').hidden = true
    onMemeInit()
}