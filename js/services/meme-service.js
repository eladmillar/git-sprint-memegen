'use strict'

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Sometimes it works',
            size: 40,
            align: 'center',
            color: 'white',
            outlineColor: 'black',
            font: 'impact',
            y: 60
        },
        {
            txt: 'Sometimes it doesnt',
            size: 40,
            align: 'center',
            color: 'white',
            outlineColor: 'black',
            font: 'impact',
            y: 340
        }
    ]
}


function getMeme() {
    if (!gMeme.lines.length) return gMeme.selectedImgId
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

function changeLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0
    console.log('gMeme.selectedLineIdx', gMeme.selectedLineIdx)
}

function raiseLine() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 10
}

function lowerLine() {
    gMeme.lines[gMeme.selectedLineIdx].y += 10
}

function addLine() {
    const newLine = {
        txt: '',
        size: 40,
        align: 'center',
        color: 'white',
        outlineColor: 'black',
        font: 'impact',
        y: 200
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function deleteLine() {
    if (gMeme.lines.length === 1) {
        gMeme.lines[0].y = 60
        gMeme.lines[0].txt = ''
        setLineText()
        return
    }
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

function changeLetterColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeOutlineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].outlineColor = color
}

