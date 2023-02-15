'use strict'

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function setImage(value) {
    console.log('hi');
    gMeme.selectedImgId = value
}

function setLineText(value) {
    console.log('gMeme', gMeme)
    gMeme.lines[gMeme.selectedLineIdx].txt = value
}

function getMeme() {
    return gMeme
}