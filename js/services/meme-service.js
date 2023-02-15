'use strict'

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Sometimes',
            size: 40,
            align: 'center',
            color: 'red',
            font: 'impact'
        }
    ]
}


function getMeme() {
    return gMeme
}


function setImage(value) {
    gMeme.selectedImgId = value
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function setLineText(value) {
    if (!value) value = ''
    gMeme.lines[gMeme.selectedLineIdx].txt = value
}

function prevLine() {
    gMeme.selectedLineIdx--
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
}

function nextLine() {
    gMeme.selectedLineIdx++
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
}

function addLine() {
    const newLine = {
        txt: '',
        size: 40,
        align: 'center',
        color: 'red',
        font: 'impact'
    }
    gMeme.lines.push(newLine)
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    return gMeme.selectedLineIdx = (!gMeme.selectedLineIdx === -1) ? gMeme.selectedLineIdx -= 1 : gMeme.selectedLineIdx = 0
}

function upFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 4
}

function downFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 4
}

function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
}

function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
}

function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
}
