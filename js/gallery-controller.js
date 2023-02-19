'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

var gImgs


function onInit() {
    createImages()
    renderGallery()
}

function onLoadGallery() {
    renderGallery()
    document.querySelector('.image-gallery').style.display = 'grid'
    document.querySelector('.canvas-container').hidden = true
    document.querySelector('.meme-inputs').style.display = 'none'
}

function renderGallery() {
    let strHTML = ``
    gImgs.forEach(img => strHTML += `<img onclick="onImageSelect(${img.id})" src="${img.url}" alt="">\n`)
    document.querySelector('.image-gallery').innerHTML = strHTML
}

function onImageSelect(imgIdx) {
    gMeme.upload = null
    setImage(imgIdx)
    document.querySelector('.image-gallery').style.display = 'none'
    onMemeInit()
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}

function createImages() {
    gImgs = [
        { id: 1, url: 'images/1.jpg', keywords: ['weird', 'politic'] },
        { id: 2, url: 'images/2.jpg', keywords: ['cute', 'dog'] },
        { id: 3, url: 'images/3.jpg', keywords: ['cute', 'dog'] },
        { id: 4, url: 'images/4.jpg', keywords: ['cute', 'dog'] },
        { id: 5, url: 'images/5.jpg', keywords: ['cute', 'dog'] },
        { id: 6, url: 'images/6.jpg', keywords: ['cute', 'dog'] },
        { id: 7, url: 'images/7.jpg', keywords: ['cute', 'dog'] },
        { id: 8, url: 'images/8.jpg', keywords: ['cute', 'dog'] },
        { id: 9, url: 'images/9.jpg', keywords: ['cute', 'dog'] },
        { id: 10, url: 'images/10.jpg', keywords: ['cute', 'dog'] },
        { id: 11, url: 'images/11.jpg', keywords: ['cute', 'dog'] },
        { id: 12, url: 'images/12.jpg', keywords: ['cute', 'dog'] },
        { id: 13, url: 'images/13.jpg', keywords: ['cute', 'dog'] },
        { id: 14, url: 'images/14.jpg', keywords: ['cute', 'dog'] },
        { id: 15, url: 'images/15.jpg', keywords: ['cute', 'dog'] },
        { id: 16, url: 'images/16.jpg', keywords: ['cute', 'dog'] },
        { id: 17, url: 'images/17.jpg', keywords: ['cute', 'dog'] },
        { id: 18, url: 'images/18.jpg', keywords: ['cute', 'dog'] },
    ]
}