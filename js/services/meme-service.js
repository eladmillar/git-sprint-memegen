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
            y: 60,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            x: 0,
            isDrag: false
        },
        {
            txt: 'Sometimes it doesnt',
            size: 40,
            align: 'center',
            color: 'white',
            outlineColor: 'black',
            font: 'impact',
            y: 340,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            x: 0,
            isDrag: false
        }
    ]
}

function setLineX() {
    gMeme.lines.forEach(line => {
        line.x = gElCanvas.width / 2
    });
}

function setLineY() {
    gMeme.lines[0].y = 60
    gMeme.lines[1].y = 340
}

function getMeme() {
    if (!gMeme.lines.length) return gMeme.selectedImgId
    return gMeme
}

function setImage(value) {
    gMeme.selectedImgId = value
}

function isClickOnLine(pos) {
    const test = gMeme.selectedLineIdx
    let counter = 0
    let check = false
    gMeme.lines.forEach(line => {
        if (pos.x > line.x - line.left && pos.x < line.x + line.right &&
            pos.y > line.y - line.top && pos.y < line.y + line.bottom) {
            gMeme.selectedLineIdx = counter
            check = true
        }
        counter++
    });
    return check
}

function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy, lineIdx) {
    gMeme.lines[lineIdx].x += dx
    gMeme.lines[lineIdx].y += dy
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx].isDrag
}

function getLineIdx() {
    return gMeme.selectedLineIdx
}

function setTextBoundries(boundries, y, x) {
    gMeme.lines.forEach(line => {
        if (line.y === y) {
            line.top = boundries.fontBoundingBoxAscent,
                line.bottom = boundries.fontBoundingBoxDescent,
                line.left = boundries.actualBoundingBoxLeft,
                line.right = boundries.actualBoundingBoxRight
            line.x = x
        }
    });
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
        y: 200,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        x: gElCanvas.width / 2,
        isDrag: false
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
    gMeme.lines[gMeme.selectedLineIdx].x = 30
}

function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    gMeme.lines[gMeme.selectedLineIdx].x = gElCanvas.width / 2
}

function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
    gMeme.lines[gMeme.selectedLineIdx].x = -30
}

function changeLetterColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeOutlineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].outlineColor = color
}