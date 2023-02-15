'use strict'
let gElCanvas
let gCtx

function onMemeInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    document.querySelector('.canvas-container').hidden = false
    document.querySelector('.meme-inputs').hidden = false
    document.querySelector('[name=line-text]').value = gMeme.lines[0].txt

    resizeCanvas()

    renderMeme()

    addListeners()
}

function renderMeme() {
    const { selectedImgId, selectedLineIdx, lines } = getMeme()
    const selectedLine = lines[selectedLineIdx]
    document.querySelector('[name=line-text]').value = selectedLine.txt
    drawImg(selectedImgId)

    if (!lines.length) return
    // drawText(currLine.txt, currLine.size, currLine.align, currLine.font, currLine.color, currLine.outlineColor, gElCanvas.width / 2, currLine.y)
    lines.forEach(line => {
        setTimeout(drawText, 40, line.txt, line.size,
            line.align, line.font, line.color,
            line.outlineColor, gElCanvas.width / 2, line.y)
    });
    // setTimeout(drawText, 40, selectedLine.txt, selectedLine.size,
    //     selectedLine.align, selectedLine.font, selectedLine.color,
    //     selectedLine.outlineColor, gElCanvas.width / 2, selectedLine.y)
}

function drawImg(imgNum) {
    const img = new Image()
    img.src = `img/${imgNum}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function onFontSelected(font) {
    setFont(font)
    renderMeme()
}

function onSetLineText(value) {
    setLineText(value)
    renderMeme()
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function drawText(text, size, alignment, font, color, outlineColor, x, y) {
    if (alignment === 'left') x = 30
    if (alignment === 'right') x = gElCanvas.width - 30
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${outlineColor}`
    gCtx.fillStyle = `${color}`
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = `${alignment}`
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
    console.log('gCtx', gCtx)
}

function addListeners() {
    // addMouseListeners()
    // addTouchListeners()
    //Listen for resize ev
    window.addEventListener('resize', () => {
        onInit()
    })
}

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchend', onUp)
// }

function onChangeLine() {
    changeLine()
    renderMeme()
}

function onRaiseLine() {
    raiseLine()
    renderMeme()
}

function onLowerLine() {
    lowerLine()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onUpFontSize() {
    upFontSize()
    renderMeme()
}

function onDownFontSize() {
    downFontSize()
    renderMeme()
}

function onAlignLeft() {
    alignLeft()
    renderMeme()
}

function onAlignCenter() {
    alignCenter()
    renderMeme()
}

function onAlignRight() {
    alignRight()
    renderMeme()
}

function onChangeLetterColor(color) {
    changeLetterColor(color)
    renderMeme()
}

function onChangeOutlineColor(color) {
    changeOutlineColor(color)
    renderMeme()
}